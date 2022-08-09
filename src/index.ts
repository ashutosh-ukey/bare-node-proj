export function pingPackage(msg?: string): void {
    if (msg) { 
        console.log("You message is safe with me.");
        if (msg.includes("starphish")) console.log(";)");
    }
    else console.log("Hello world (from inside Ashu's npm account, with 2FA)!");
}

export const aSecret: string = "I like pandas";
