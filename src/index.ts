export function pingPackage(msg?: string): string {
    if (msg) { 
        if (msg.includes("Spongebob")) console.log("Squarepants!");
        console.log("I received:", msg);
    }
    else console.log("Hello world!");

    return "You have succesfully pinged the package"
}

export const aSecret: string = "This has one keyword";