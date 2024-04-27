import { TestBed } from '@angular/core/testing';

import { NuevasTareasService } from './nuevas-tareas.service';

describe('NuevasTareasService', () => {
  let service: NuevasTareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevasTareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
