Modify above application in such a way that after showing the message , if the message is for record deleted 
it must be shown in red color. If the message is deletion cancelled , it must be shown in green color .
This requirement can be done using a concept known as Property Binding .
 
Property Binding is used to fetch the value of a class property and use it in the HTML template.
It is done by surrounding the property of the class in [] as shown below :
<span [class]="colorClass"> Record Deleted </span>
     Here class is built in property of the span tag and colorClass is the user 
    defined property of the component class.