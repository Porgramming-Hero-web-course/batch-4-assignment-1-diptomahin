# Handling Asynchronous Operations in TypeScript with Async/Await

Working with asynchronous operations is common in modern JavaScript and TypeScript applications. Traditionally, callbacks and promises were used to handle async tasks. However, `async/await` introduced a simpler and more readable way to handle them.

---

## What is Async/Await?

`async/await` is syntactic sugar built on top of promises. It makes asynchronous code look and behave more like synchronous code, which improves readability and reduces errors.

- **`async`**: Marks a function as asynchronous. It automatically wraps the return value in a promise.
- **`await`**: Pauses the execution of the `async` function until the promise resolves or rejects.

---

## Async/Await in TypeScript: Examples

### Example-1: Fetching Data (Callback → Async/Await)

#### Callback Version:
```typescript
function fetchData(callback: (error: Error | null, data?: string) => void): void {
    setTimeout(() => {
        callback(null, "Data fetched!");
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Callback:", data);
    }
});
```
#### Async/Await Version:
```typescript
function fetchDataAsync(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
}

async function handleData(): Promise<void> {
    try {
        const data = await fetchDataAsync();
        console.log("Async/Await:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

handleData();
```

### Example-2: Sequential Execution (Callback → Async/Await)

#### Callback Version:
```typescript
function taskOne(): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve("Task One Complete"), 1000));
}

function taskTwo(): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve("Task Two Complete"), 1000));
}

taskOne()
    .then((result) => {
        console.log(result);
        return taskTwo();
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => console.error(error));

```
#### Async/Await Version:
```typescript
async function executeTasks(): Promise<void> {
    try {
        const resultOne = await taskOne();
        console.log(resultOne);

        const resultTwo = await taskTwo();
        console.log(resultTwo);
    } catch (error) {
        console.error("Error:", error);
    }
}

executeTasks();

```

## Conclusion

Using `async/await` in TypeScript makes asynchronous programming much more straightforward and maintainable. It eliminates callback hell and makes error handling intuitive with `try/catch`. Whether you’re working on sequential or parallel tasks, `async/await` is a powerful tool to write clean and readable code.
