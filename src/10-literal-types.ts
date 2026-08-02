
// Numeric literal
type dice = 1|2|3|4|5|6

let roll:dice = 4
// roll=8 //error not in type dice
roll=6

// string literal
type res = "loading" | "success"

let Status:res = "loading"
// Status = "pending" //error
Status = "success"

// boolean literal
type isAdmin = true

let admin:isAdmin = true
// admin = false //error
admin = true

// Combining with other types
type SuccessResponse = {
  status: "success";
  data: any;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;