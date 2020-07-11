import { TestBed, inject } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";

describe('HeroService', () => {
  let mockMessageService;
  let httpTestingController: HttpTestingController;
  let service: HeroService;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HeroService,
        {provide: MessageService, useValue: mockMessageService}
      ]
    });

    // TestBed.get() is a method to get the instaNCE OF a service - just like TestBed.createcomponent is for components.
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(HeroService);
  });

  describe('getHero', () => {
    // it('should call get with the correct URL',
    // ANOTHER METHOD TO INITIALIZE SERVICES
    //   inject(([HeroService, HttpTestingController]),
    //     (service: HeroService, controller: HttpTestingController) => {
    // }));

    it('should call get with the correct URL', () => {
      service.getHero(4).subscribe();

      const req = httpTestingController.expectOne('api/heroes/4');

      // This is where service.getHero() is called. This line basically tells the app to return thoose values as part of the API
      req.flush({
        id: 4,
        name: 'SuperDude',
        strength: 100
      });

      // This ensures we test exactly what was expected. If services was called twice, it fails.
      httpTestingController.verify();
    });
  });
});
