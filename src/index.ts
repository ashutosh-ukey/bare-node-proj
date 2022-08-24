export function pingPackage(msg?: string): void {
    if (msg) { 
        console.log("I received:", msg);
        if (msg.includes("starphish")) console.log(";)");
    }
    else console.log("Hello world (a release workflow!)!");
}

export const aSecret: string = "This has one keyword";