export function pingPackage(msg?: string): void {
    if (msg) { 
        console.log("You message is safe with me.");
        if (msg.includes("starfoosh")) console.log(";)");
    }
    else console.log("Hello world (from inside Ashu's npm account)!");
}

export const aSecret: string = "I like bubblegum";
