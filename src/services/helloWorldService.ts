const sayHellos = (): Promise<{ message: string }> => {
    return new Promise((resolve, reject) => {
        try {
            // Simulate some asynchronous operation, like a database call or API request
            const data = { message: 'Hello, World!' };
            resolve(data); // Resolve the promise with the data
        } catch (error) {
            reject(error); // Reject the promise with an error if something goes wrong
        }
    });
};

export const helloWorldService = {
    sayHellos
};