import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-buscador',
	templateUrl: './buscador.component.html',
	styles: []
})
export class BuscadorComponent implements OnInit {
	termino: string;
	heroes: Heroe[] = [];

	constructor(private _heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			this.termino = params['termino'];
			this.heroes = this._heroesService.buscarHeroe(this.termino);
		});
	}
	verHeroe(idx: number) {
		this.router.navigate(['/heroe', idx])
	};

}
