import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../../services/menu.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { foodTags } from '../menu';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss'],
})
export class EditMenuComponent implements OnInit {
  menuForm: FormGroup;
  listOfTagOptions = [];
  menuItemId: string;
  foodTags = foodTags;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private menuService: MenuService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initialiseForm();
    this.activatedRoute.params.subscribe((params) => {
      this.menuItemId = params.id;
      if (this.menuItemId) {
        this.updateFormValues(this.menuItemId);
      }
    });
  }

  private initialiseForm(): void {
    this.menuForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')],
      ],
      sku: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  private updateFormValues(menuItemId: string): void {
    this.menuService.getSingleMenuItem(menuItemId).subscribe((response) => {
      this.menuForm.patchValue({
        name: response.name,
        price: response.price,
        sku: response.sku,
        description: response.description,
      });
      this.listOfTagOptions = response.tags;
    });
  }

  submitForm(): void {
    if (this.menuForm.valid) {
      const menuItem = {
        ...this.menuForm.value,
        tags: this.listOfTagOptions,
        id: this.menuItemId,
      };
      this.menuService.saveMenuItem(menuItem).subscribe(
        async (response) => {
          this.message.success(
            `Menu Item ${this.menuItemId ? 'edited' : 'added'} successfully!`
          );
          await this.router.navigateByUrl('/menu');
        },
        () => {
          this.message.error('Something went wrong');
        }
      );
    }
  }
}
