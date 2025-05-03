const downloadExcel = () => {
	const a = document.createElement('a');
	a.href = './archivos/Presupuesto Formación ciudadana.xlsx';
	a.download = 'Presupuesto-50-30-20.xlsx';
	a.click();
	document.body.removeChild(a);

}

const questions = document.querySelectorAll('.faq-question');

questions.forEach(button => {
	button.addEventListener('click', () => {
		const answer = button.nextElementSibling;
		const isOpen = answer.style.display === 'block';

		// Cierra todos
		document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');

		// Abre solo el actual si estaba cerrado
		if (!isOpen) {
			answer.style.display = 'block';
		}
	});
});

const downloadWord = () => {
	const a = document.createElement('a');
	a.href = './archivos/Matriz_Eisenhower_Explicada.docx';
	a.download = 'Plantilla_Matriz_Eisenhower.docx';
	a.click();
	document.body.removeChild(a);

}