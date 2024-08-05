docker exec drop-points-crawler bun crawl prepare
docker exec drop-points-crawler bun crawl crawl neutron
docker exec drop-points-crawler bun crawl finish

docker exec drop-points-crawler ./backup.sh backups
mkdir -p "$(pwd)/backups"
mkdir -p "$(pwd)/tmp/backups"
docker cp drop-points-crawler:/usr/src/app/backups/. "$(pwd)/tmp/backups"
rsync -av --ignore-existing "$(pwd)/tmp/backups/" "$(pwd)/backups/"
rm -rf "$(pwd)/tmp/backups"