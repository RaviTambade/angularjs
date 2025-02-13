 
    export class ParentController {
      message: string;
      
      static $inject = ['child'];
  
      constructor(child: string) {
        this.message = 'This is the parent view.';
        console.log(child);  // Child message or resolved data
      }
    }
 
  