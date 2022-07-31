export const execute = (callback: () => any) => {
  try {
    const res = callback();
    return [res, null];
  } catch (err: any) {
    console.error(Error(err.message ?? err));
    // You can also log error messages to an error reporting service here
    return [null, err];
  }
};

export const executeAsync = async (callback: () => any) => {
  try {
    const res = await callback();
    return [res, null];
  } catch (err: any) {
    console.error(Error(err.message ?? err));
    // You can also log error messages to an error reporting service here
    return [null, err];
  }
};
