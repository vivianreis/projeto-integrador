import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategoriaComponent } from './delete-categoria.component';

describe('DeleteCategoriaComponent', () => {
  let component: DeleteCategoriaComponent;
  let fixture: ComponentFixture<DeleteCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
