import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ord } from 'src/app/models/ord';
import { OrdService } from 'src/app/services/ord.service';

@Component({
  selector: 'app-update-ord',
  templateUrl: './update-ord.component.html',
  styleUrls: ['./update-ord.component.css']
})
export class UpdateOrdComponent implements OnInit {

  updateOrdForm: FormGroup;
  constructor(private fb: FormBuilder,
    private ordservice: OrdService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ])

    }
    this.updateOrdForm = this.fb.group(formControls);
  }
  get name() { return this.updateOrdForm.get('name') }


  ngOnInit(): void {
    let id = this.route.snapshot.params.id;

    this.ordservice.getOne(id).subscribe(
      result => {
        let ord = result;
        console.log(result);

        this.updateOrdForm.patchValue({
          name: ord.name,
        })

      },
      error => {
        console.log(error);
      }
    )

  }

  updateOrd() {
    console.log(this.updateOrdForm.value);

    let data = this.updateOrdForm.value;
    let idUser = this.route.snapshot.params.id;
    let ord = new Ord(idUser,data.name);

    this.ordservice.updateOrdonnance(ord).subscribe(
      res=>{
        console.log(res);
        this.toastr.warning("","la mise à jour est réussie ");

        this.router.navigate(['/list-ord']);
      },
      err=>{
        console.log(err);
      }
    )

  }

}
