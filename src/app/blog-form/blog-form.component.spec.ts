import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogFormComponent } from './blog-form.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('BlogFormComponent', () => {
  let component: BlogFormComponent;
  let fixture: ComponentFixture<BlogFormComponent>;

  beforeEach(async () => {

    fixture = TestBed.createComponent(BlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("creation d'un blog", () => {
    const fixture = TestBed.createComponent(BlogFormComponent);
    const component = fixture.componentInstance;
    const debugElement = fixture.debugElement;

    component.titre = "test";
    component.sousTitre = "test";
    component.categorie = "test";

    
    expect(component).toBeTruthy();
  });
});
