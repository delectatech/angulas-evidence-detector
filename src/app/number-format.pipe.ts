import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true, // Asegura que el Pipe sea standalone
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number): string {
    // Usamos un formato explícito para asegurar la separación de miles
    return new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 0,
      useGrouping: true, // Asegura que siempre use el separador de miles
    }).format(value);
  }
}
