// 2.1 
const runTimeOut = async () => {
  try {
    await new Promise((resolve) => {
      setTimeout(function () {
        resolve();
      }, 2000);
    });
    {
      console.log("Time out!");
    }
  } catch (error) {}
};

runTimeOut();


