function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Shirt size: ${size}`);
    console.log(`Message: ${message}`);
}

// Function call
make_shirt(); // Large shirt with default message
make_shirt(" large , Medium"); // large nd Medium shirt with default message
make_shirt("Small", "TypeScript is awesome!"); // Custom message for a Small shirt
