import { Database } from 'bun:sqlite';

export function getNextBatchId(db: Database): number {
  const row = db
    .query<
      { max: number },
      null
    >('SELECT COALESCE(MAX(batch_id), 0) as max FROM batches')
    .get(null);
  return row!.max + 1;
}

export function areAllTasksReady(db: Database, batchId: number): boolean {
  const row = db
    .query<
      { cnt: number },
      [number]
    >('SELECT COUNT(*) as cnt FROM tasks WHERE batch_id = ? AND status != "ready"')
    .get(batchId);
  return (row?.cnt || 0) === 0;
}

export function getAssetMulsByProtocolAndBatchId(
  db: Database,
  protocolId: string,
  batchId: number,
): Record<string, number> {
  const query = db.query<
    { protocol_id: string; asset_id: string; multiplier: number },
    [number, string]
  >(
    `
    WITH batch_ts AS (
      SELECT ts FROM batches WHERE batch_id = ?
    )
    SELECT
      protocol_id, asset_id, multiplier
    FROM (
      SELECT * FROM (
        SELECT *
        FROM schedule s
        LEFT JOIN batches bt ON (bt.ts > s.start AND bt.ts < s.end)
        WHERE protocol_id = ? AND ((s.start = 0 AND s.end = 0) OR bt.ts IS NOT NULL)
        ORDER BY protocol_id, schedule_id DESC
      ) a
      GROUP BY a.protocol_id, a.asset_id
    ) b
    WHERE b.enabled = 1;
    `,
  );
  return query
    .all(batchId, protocolId)
    .reduce((acc, row) => ({ ...acc, [row.asset_id]: row.multiplier }), {});
}
