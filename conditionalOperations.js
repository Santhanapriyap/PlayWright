function launchBrowser(browserName)
{
if(browserName == "chrome")
    return "Chrome Browser & Version 124";
else if(browserName == "Edge")
    return "Edge Browser & version 123";
else if(browserName == "FF")
    return "FF Browser and Version 119";
else
    return "Unsupported Browser";
}
function runTest(testType)
{
    switch(testType)
    {
    case "smoke":
        return "Smoke Test";
    case "sanity": 
        return "Sanity test";
    case "regression":
        return "Regression test";
    default:
        return "Smoke test";
    }
}
console.log(launchBrowser("chrome"));
console.log(runTest("regression"));


