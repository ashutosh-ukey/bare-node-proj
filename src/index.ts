export function pingPackage(msg?: string): string {
    if (msg) { 
        console.log("I received:", msg);
        if (msg.includes("starphish")) console.log(";)");
    }
    else console.log("Hello world (a release workflow!)!");

    return "Return beta"
}

export const aSecret: string = "This has one keyword";