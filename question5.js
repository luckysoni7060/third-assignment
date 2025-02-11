let packageType = "standard";

switch (packageType) {
    case "standard":
        console.log("3-4 days");
        break;
    case "express":
        console.log("1-2 days");
        break;
    case "overnight":
        console.log("would be delivered the next night");
        break;
    default:
        console.log("no valid package");
        break;
}