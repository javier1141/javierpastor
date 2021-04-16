import { TestBed } from '@angular/core/testing';

import { CancionesServicesService } from './canciones-services.service';

describe('CancionesServicesService', () => {
  let service: CancionesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancionesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
