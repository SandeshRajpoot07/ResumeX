// Function to generate resume HTML
function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value
      .split(',')
      .map(skill => skill.trim())
      .join(' | ');
    const work = document.getElementById('work').value;
    const projects = document.getElementById('projects').value;
    const description = document.getElementById('description').value;
  
    const resumeHTML = `
      <div class="resume">
        <h1>${name}</h1>
        <p style="text-align: center;">Email: ${email} | Phone: ${phone}</p>
  
        <div class="section education">
          <h2>Education</h2>
          <p>${education}</p>
        </div>
  
        <div class="section skills">
          <h2>Skills</h2>
          <p>${skills}</p>
        </div>
  
        <div class="section work">
          <h2>Work Experience</h2>
          <p>${work}</p>
        </div>
  
        <div class="section projects">
          <h2>Projects</h2>
          <p>${projects}</p>
        </div>
  
        <div class="section description">
          <h2>Description</h2>
          <p>${description}</p>
        </div>
      </div>
    `;
  
    document.getElementById('generatedResume').innerHTML = resumeHTML;
  
    // Show the Download PDF button once the resume is generated
    document.getElementById('downloadBtn').style.display = 'inline-block';
  }
  
  // Function to generate and download the resume as PDF
  function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    // Get the resume content and add it to the PDF
    const resumeContent = document.getElementById('generatedResume').innerText;
    
    // You can customize the layout and font size here
    doc.text(resumeContent, 10, 10);
  
    // Save the PDF with a specific filename
    doc.save('resume.pdf');
  }
  