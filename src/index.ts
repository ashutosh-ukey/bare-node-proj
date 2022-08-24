export function pingPackage(msg?: string): string {
    if (msg) { 
        console.log("I received:", msg);
        if (msg.includes("starphish")) console.log(";)");
    }
    else console.log("Hello world (a release workflow!)!");

    return "You have succesfully pinged the package!"
}

export const aSecret: string = "This has one keyword";