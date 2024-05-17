export const ConcurrentJob = <T>(concurrency: number) => {
  type Callback = <T>(key: string, result: T) => void;
  let cb: Callback = () => {
    throw new Error('Callback not set');
  };
  const tasks: (() => Promise<{ key: string; result: T }>)[] = [];
  let activeCount = 0;
  const addTask = (task: (key: string) => Promise<T>, key: string) => {
    tasks.push(async () => {
      const result = await task(key);
      return { key, result };
    });


    
    tryToRunNextTask();



  };

  const getActiveCount = () => activeCount;

  const tryToRunNextTask = async () => {
    if (activeCount >= concurrency || tasks.length === 0) {
      return;
    }
    const nextTask = tasks.shift();
    if (nextTask) {
      activeCount++;
      nextTask()
        .then(({ key, result }) => {
          cb(key, result);
          activeCount--;
          tryToRunNextTask(); // Try to run the next task
        })
        .catch((error) => {
          console.error(`Task failed with error: ${error}`);
          activeCount--;
          tryToRunNextTask(); // Proceed with the next task even if the current one fails
        })
        .finally(() => {
          tryToRunNextTask(); // Ensure continuation in case of any async gaps
        });
    }
  };

  const waitFinish = async () => {
    while (activeCount > 0 || tasks.length > 0) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  };

  const onResult = (fn: Callback) => {
    cb = fn;
  };

  return {
    onResult,
    addTask,
    waitFinish,
    getActiveCount,
  };
};
