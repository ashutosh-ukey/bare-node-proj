export function pingPackage(msg?: string): string {
    if (msg) { 
        if (msg.includes("starphish")) console.log(";)");
        console.log("I received:", msg);
    }
    else console.log("Hello world (a release workflow!)!");

    return "You have succesfully pinged the package!"
}

export function sayHello(): void {
    console.log("Hello Typescript world");
}


export const aSecret: string = "This has one keyword";