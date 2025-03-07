package ud7;

public class Portatil extends Ordenador {
	private int duracionBateria;
	
	//constructor
	public Portatil(int nSerie, String procesador, String memoria, String tamPantalla, int duracionBateria) {
		//llamamos al constructor de la clase padre
		super(nSerie, procesador, memoria, tamPantalla);
		
		this.duracionBateria=duracionBateria;
	}

	public int getDuracionBateria() {
		return duracionBateria;
	}

	public void setDuracionBateria(int duracionBateria) {
		this.duracionBateria = duracionBateria;
	}
	public String toString() {
		return super.toString()+" dur: "+duracionBateria;
	}
}
