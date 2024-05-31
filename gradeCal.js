function gradeCalculation(studentScore)
{
    let score;
    if(studentScore>90)
        score = "O+";
    else if(studentScore>80)
        score = "O";
    else if(studentScore>70)
        score = "A+";
    else if(studentScore>60)
        score = "A";
    else if(studentScore>50)
        score = "B+";
    else if(studentScore>40)
        score = "B";
    else if(studentScore>35)
        score = "P";
 

    switch(score)
    {    
    case "O+":
        return "Outstanding";
    case "O": 
        return "Excellent";
    case "A+": 
        return "Good";
    case "A": 
        return "Average";
    case "B+": 
        return "Need to improve";
    case "B": 
        return "Need more concentration";
    case "P": 
        return "Pass";
    default:
        return "Fail";
    } 
}
console.log(gradeCalculation(100));