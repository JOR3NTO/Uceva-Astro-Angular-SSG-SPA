import { Component, inject } from '@angular/core';
import { Distribuidor } from '../../interfaces/distribuidores.interface';
import { State } from '../../interfaces/state.interface';
import { DistribuidoresService } from '../../services/distribuidores/distribuidores.service';
import { DistribuidoresTableComponent } from '../../components/distribuidores-table/distribuidores-table.component';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-distribuidores',
  imports: [DistribuidoresTableComponent, AlertComponent],
  templateUrl: './distribuidores.page.html',
})
export class DistribuidoresPage {

  distribuidores: Distribuidor[] = [];

  state: State = 'init';

  private distribuidoresService = inject(DistribuidoresService);

  ngOnInit(): void {
    this.state = 'loading';
    this.distribuidoresService.getAllDistribuidores().subscribe({
      next: (distribuidores) => {
        this.distribuidores = distribuidores;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      }
    });
  }

}
