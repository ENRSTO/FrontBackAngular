import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzazioneDatiComponent } from './visualizzazione-dati.component';

describe('VisualizzazioneDatiComponent', () => {
  let component: VisualizzazioneDatiComponent;
  let fixture: ComponentFixture<VisualizzazioneDatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzazioneDatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzazioneDatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
