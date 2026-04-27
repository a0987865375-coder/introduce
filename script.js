// ==========================================
// Portfolio Data Structure
// ==========================================
const portfolioData = {
  // 專業技能 (Skills)
  skills: {
    programming: ["Python", "C/C++", "Verilog"],
    ai_ml: ["PyTorch", "MediaPipe", "BiLSTM", "Isolation Forest"],
    web: ["HTML", "CSS", "JavaScript"],
    tools: ["Git", "Vivado", "VS Code", "Jupyter Notebook"]
  },

  // 精選專案 (Projects)
  projects: [
    {
      id: "p1",
      name: "非接觸式血管異常篩檢系統",
      shortDescription: "基於 12-channel rPPG 與 BiLSTM 的深度學習生理訊號分析系統。",
      detailedDescription: "大三專案。透過攝影機捕捉臉部影像，使用 MediaPipe 結合 LGI/POS/CHROM 等演算法萃取 12 通道 rPPG 訊號。後端訓練 BiLSTM 模型進行特徵提取，並搭配 Isolation Forest 達成非監督式的血管異常狀態偵測。",
      techStack: ["Python", "PyTorch", "MediaPipe", "Signal Processing"],
      githubLink: "https://github.com/yourusername/rppg-screening",
      demoLink: "https://youtube.com/your-demo-video",
      status: "In Progress"
    },
    {
      id: "p2",
      name: "基於 EGO1 的 FPGA 互動遊戲開發",
      shortDescription: "使用 Verilog 在 Artix-7 FPGA 開發板上實現 VGA 顯示與周邊控制。",
      detailedDescription: "整合 EGO1 開發板的硬體資源，透過 Verilog 硬體描述語言設計底層邏輯，成功驅動 VGA 螢幕輸出遊戲畫面，並處理按鈕防彈跳 (Debounce) 與序向邏輯控制。",
      techStack: ["Verilog", "FPGA", "Vivado", "Digital Logic Design"],
      githubLink: "https://github.com/yourusername/fpga-vga-game",
      demoLink: "",
      status: "Completed"
    },
    {
      id: "p3",
      name: "智慧感測與互動技術競賽專案",
      shortDescription: "結合 AI 視覺辨識與感測技術的互動系統。",
      detailedDescription: "參與智慧感測與互動技術競賽（題目一）的開發專案，負責核心感測演算法的整合與優化，提升系統在複雜環境下的辨識準確率與即時互動性。",
      techStack: ["Python", "Computer Vision", "Sensor Integration"],
      githubLink: "https://github.com/yourusername/smart-sensing-competition",
      demoLink: "",
      status: "In Progress"
    }
  ],

  // 修課紀錄 (Courses)
  courses: [
    {
      id: "c1",
      name: "深度學習與應用",
      semester: "111-2",
      category: "AI / 演算法",
      courseLink: "https://course-system.edu/course-link",
      skillsLearned: ["PyTorch", "Neural Networks", "Model Training"],
      shortDescription: "深入探討 CNN、RNN 等架構，並完成多項影像與序列資料處理的實作作業。"
    },
    {
      id: "c2",
      name: "硬體描述語言與設計",
      semester: "112-1",
      category: "硬體工程",
      courseLink: "",
      skillsLearned: ["Verilog", "Testbench", "Sequential Logic"],
      shortDescription: "學習數位電路設計流程，掌握加法器、乘法器及狀態機 (FSM) 的 RTL 級設計。"
    },
    {
      id: "c3",
      name: "數位訊號處理",
      semester: "112-2",
      category: "訊號處理",
      courseLink: "",
      skillsLearned: ["Filter Design", "Fourier Transform", "MATLAB/Python"],
      shortDescription: "涵蓋離散時間訊號分析與數位濾波器設計，為後續生醫訊號 (rPPG) 處理打下基礎。"
    }
  ]
};

// 解構數據便利使用
const courses = portfolioData.courses;
const projects = portfolioData.projects;
const skills = portfolioData.skills;

// 1. 自動更新 Footer 的年份
document.getElementById('current-year').textContent = new Date().getFullYear();

// 2. 動態渲染 Courses
function renderCourses() {
    const container = document.getElementById('courses-list');
    if (!container) return;
    
    container.innerHTML = courses.map(course => `
        <div class="course-card fade-in">
            <div class="course-header">
                <h3>${course.name}</h3>
                <span class="course-category">${course.category}</span>
            </div>
            <p class="course-semester">📅 ${course.semester}</p>
            <p class="course-desc">${course.shortDescription}</p>
            <div class="skills-tags">
                ${course.skillsLearned.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
            ${course.courseLink ? `<a href="${course.courseLink}" target="_blank" class="course-link">查看課程 →</a>` : ''}
        </div>
    `).join('');
}

// 3. 動態渲染 Projects
function renderProjects() {
    const container = document.getElementById('projects-list');
    if (!container) return;
    
    container.innerHTML = projects.map(project => `
        <div class="project-card fade-in">
            <div class="project-header">
                <h3>${project.name}</h3>
                <span class="project-status status-${project.status}">${project.status}</span>
            </div>
            <p class="project-short">${project.shortDescription}</p>
            <p class="project-detail">${project.detailedDescription}</p>
            <div class="tech-stack">
                ${project.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="btn btn-small">GitHub</a>` : ''}
                ${project.demoLink ? `<a href="${project.demoLink}" target="_blank" class="btn btn-small">Demo</a>` : ''}
            </div>
        </div>
    `).join('');
}

// 4. 動態渲染 Skills
function renderSkills() {
    const container = document.getElementById('skills-list');
    if (!container) return;
    
    const skillCategories = {
        'programming': 'Programming',
        'ai_ml': 'AI / ML',
        'web': 'Web',
        'tools': 'Tools'
    };
    
    container.innerHTML = Object.entries(skills).map(([key, items]) => `
        <div class="skill-category fade-in">
            <h4>${skillCategories[key]}</h4>
            <div class="skill-items">
                ${items.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// 5. 滾動淡入效果 (Intersection Observer API)
document.addEventListener('DOMContentLoaded', () => {
    // 先渲染所有資料
    renderCourses();
    renderProjects();
    renderSkills();
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// ==========================================
// 自定義游標特效 (Custom Cursor)
// ==========================================
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

let mouseX = 0;
let mouseY = 0;
let dotX = 0;
let dotY = 0;

// 更新游標位置
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // 立即更新小點
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
});

// 外圈游標平滑跟蹤
function animateCursorOutline() {
    dotX += (mouseX - dotX) * 0.25;
    dotY += (mouseY - dotY) * 0.25;
    
    cursorOutline.style.left = dotX + 'px';
    cursorOutline.style.top = dotY + 'px';
    
    requestAnimationFrame(animateCursorOutline);
}

animateCursorOutline();

// 滑鼠進入互動元素時的特效
const interactiveElements = document.querySelectorAll('.btn, .card, .course-card, .project-card, .skill-category, .skill-item, .nav-links a');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorDot.style.width = '18px';
        cursorDot.style.height = '18px';
        cursorDot.style.backgroundColor = 'rgba(74, 171, 255, 0.88)';
        cursorDot.style.boxShadow = '0 0 20px rgba(74, 171, 255, 0.8), 0 0 40px rgba(74, 171, 255, 0.3)';
        
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.borderColor = 'rgba(74, 171, 255, 0.95)';
        cursorOutline.style.opacity = '0.95';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorDot.style.width = '10px';
        cursorDot.style.height = '10px';
        cursorDot.style.backgroundColor = 'var(--accent-color)';
        cursorDot.style.boxShadow = '0 0 16px rgba(74, 171, 255, 0.6), 0 0 28px rgba(74, 171, 255, 0.35)';
        
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.borderColor = 'rgba(74, 171, 255, 0.7)';
        cursorOutline.style.opacity = '0.65';
    });
});
