export function pingPackage(msg?: string): void {
    if (msg) { 
        console.log("I received:", msg);
        if (msg.includes("starphish")) console.log(";)");
    }
    else console.log("Hello world (the final yarn)!");
}

export const aSecret: string = "I like sushi";
