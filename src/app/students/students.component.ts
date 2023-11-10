import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';
import { FormsModule, NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students:Student[] =[]
  message:string='';
  colorClass:string='';

  constructor(){

    let s1=new Student(1,"Gandhali",2,80,["Java","Python"])
    let s2=new Student(2,"Parth",1,85,["English","Maths"])
    let s3=new Student(3,"Rutvij",1,84,["English","Maths"])
    let s4=new Student(4,"Pushkar",1,88,["English","Maths"])
    let s5=new Student(5,"Anagha",1,89,["English","Maths"])
    
    this.students.push(s1)
    this.students.push(s2)
    this.students.push(s3)
    this.students.push(s4)
    this.students.push(s5)

  }
  showStudents(){
  }
  deleteStudent(rollno:number){
    const result=confirm('Are you sure you want to delete this data?')
    if (result){
      this.students=this.students.filter(s => s.rollno != rollno)
      this.message='Record Deleted'
      this.colorClass='success'
    }
    else{
      this.message='Deletion canceled'
      this.colorClass='error'
    }
   
    
  }
  // updateStudent(s: Student){
  //   const result=confirm('Are you sure you want to update this data?')
  //   if (result){
  //     this.students=this.students.filter(s =>s.s != s)
  //   }
  //   console.log(s);

  // }
  
 
    // Add a property to store the data for updating
    updateData: Partial<Student> = {};
  
    // Add a ViewChild decorator to get a reference to the form
    @ViewChild('updateForm') updateForm!: NgForm;
    @ViewChild('updateModal') updateModal!: ElementRef;
  
    // Modify the updateStudent method
    updateStudent(student: Student): void {
      // Copy student data to updateData for editing
      this.updateData = { ...student };
      // Show the update modal
      this.updateModal.nativeElement.style.display = 'block';
    }
  
    // Add a method to close the update form
    closeUpdateForm(): void {
      this.updateModal.nativeElement.style.display = 'none';
      // Reset the form on close
      this.updateForm.resetForm();
    }
  
    // Add a method to handle form submission
    submitUpdateForm(): void {
      // Implement your update logic here using this.updateData
      // Close the update modal after updating
      this.closeUpdateForm();
    }
  }
  
  


