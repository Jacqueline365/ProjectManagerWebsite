document.getElementById('downloadButton').addEventListener('click', function () {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    const pdfPath = './Jacqueline Gutierrez Resume 2024.pdf';

    // Create an anchor element
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';

    // Trigger a click event to initiate the download
    link.click();
});
