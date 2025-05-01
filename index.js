
// Esta función realiza la descarga del archivo excel.
function downloadExcel() {
	const a = document.createElement('a');
	a.href = './archivos/Presupuesto Formación ciudadana.xlsx';
	a.download = 'Presupuesto-50-30-20.xlsx';
	a.click();
	document.body.removeChild(a);

}