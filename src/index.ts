export function pingPackage(msg?: string): void {
    if (msg) { 
        console.log("You message is safe with me.");
        if (msg.includes("starfish")) console.log(";)");
    }
    else console.log("Hello world (from inside npm)!");
}

export const aSecret: string = "I like bubblegum";