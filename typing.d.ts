interface ProjectCriteria {
  criteria1: string;
  criteria2: string;
  criteria3: string;
}

export interface Project {
  _id: string;
  Employee_Amount: string;
  Project_Id: string;
  Project_Name: string;
  Project_Location: string;
  Post_Date: Date;
  Project_Skill: string;
  Project_Field: string;
  Project_Criteria: ProjectCriteria;
  User_id: string;
  User_University: string;
  End_Date: Date;
}

export interface User {}

export interface Message {}

export interface MessageBox {}
