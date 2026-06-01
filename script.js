/**
 * AI Hub 2026 - Main Script
 * Handles data, filtering, search, favorites, and interactions.
 */

// --- 1. Data Structure (The AI Database) ---
const aiData = [
    // --- Featured & Chat AIs ---
    {
        id: 1,
        name: "ChatGPT",
        url: "https://chatgpt.com",
        category: "Chat",
        badge: "Most Popular",
        icon: "fa-message-bot",
        desc: "OpenAI's flagship conversational AI assistant.",
        featured: true
    },
    {
        id: 2,
        name: "Claude",
        url: "https://claude.ai",
        category: "Chat",
        badge: "Top Choice",
        icon: "fa-comment-sms",
        desc: "Anthropic's AI assistant focused on safety.",
        featured: true
    },
    {
        id: 3,
        name: "Gemini",
        url: "https://gemini.google.com",
        category: "Chat",
        badge: "Multimodal",
        icon: "fa-gem",
        desc: "Google's advanced multimodal AI model.",
        featured: true
    },
    {
        id: 4,
        name: "DeepSeek",
        url: "https://chat.deepseek.com",
        category: "Chat",
        badge: "Open Source",
        icon: "fa-magnifying-glass",
        desc: "Advanced reasoning LLM.",
        featured: true
    },
    {
        id: 5,
        name: "Perplexity",
        url: "https://www.perplexity.ai",
        category: "Chat",
        badge: "Search AI",
        icon: "fa-wave-square",
        desc: "AI-powered search engine for deep research.",
        featured: true
    },
    {
        id: 6,
        name: "Grok",
        url: "https://grok.com",
        category: "Chat",
        badge: "xAI",
        icon: "fa-robot",
        desc: "xAI's witty AI assistant with real-time knowledge.",
        featured: false
    },
    {
        id: 7,
        name: "Microsoft Copilot",
        url: "https://copilot.microsoft.com",
        category: "Chat",
        badge: "Productivity",
        icon: "fa-microsoft",
        desc: "AI assistant integrated into Windows and Edge.",
        featured: false
    },
    {
        id: 8,
        name: "Meta AI",
        url: "https://www.meta.ai",
        category: "Chat",
        badge: "Social AI",
        icon: "fa-facebook",
        desc: "Meta's assistant across Facebook, Instagram, WhatsApp.",
        featured: false
    },
    {
        id: 9,
        name: "Pi AI",
        url: "https://pi.ai",
        category: "Chat",
        badge: "Personal",
        icon: "fa-feather-pointed",
        desc: "Inflection AI's personal AI companion.",
        featured: false
    },
    {
        id: 10,
        name: "YouChat",
        url: "https://you.com",
        category: "Chat",
        badge: "Search",
        icon: "fa-user",
        desc: "AI-powered search assistant.",
        featured: false
    },
    {
        id: 11,
        name: "Poe",
        url: "https://poe.com",
        category: "Chat",
        badge: "Aggregator",
        icon: "fa-circle-nodes",
        desc: "Quora's platform to access multiple AI bots.",
        featured: false
    },
    {
        id: 12,
        name: "Character.AI",
        url: "https://character.ai",
        category: "Chat",
        badge: "Creative",
        icon: "fa-users",
        desc: "Create characters and chat with anyone.",
        featured: false
    },
    {
        id: 13,
        name: "Replika",
        url: "https://replika.com",
        category: "Chat",
        badge: "Companion",
        icon: "fa-heart",
        desc: "AI companion for emotional support.",
        featured: false
    },
    {
        id: 14,
        name: "Le Chat",
        url: "https://chat.mistral.ai",
        category: "Chat",
        badge: "Open Source",
        icon: "fa-wind",
        desc: "Mistral AI's efficient assistant.",
        featured: false
    },

    // --- Coding & Developer AIs ---
    {
        id: 15,
        name: "GitHub Copilot",
        url: "https://github.com/features/copilot",
        category: "Coding",
        badge: "Industry Std",
        icon: "fa-code",
        desc: "AI pair programmer by GitHub & OpenAI.",
        featured: true
    },
    {
        id: 16,
        name: "Cursor",
        url: "https://cursor.com",
        category: "Coding",
        badge: "Editor",
        icon: "fa-laptop-code",
        desc: "AI-first code editor built on VS Code.",
        featured: true
    },
    {
        id: 17,
        name: "Blackbox AI",
        url: "https://www.blackbox.ai",
        category: "Coding",
        badge: "Code Gen",
        icon: "fa-box-open",
        desc: "AI coding assistant specifically for code.",
        featured: false
    },
    {
        id: 18,
        name: "Windsurf",
        url: "https://windsurf.com",
        category: "Coding",
        badge: "Flow",
        icon: "fa-wind",
        desc: "Codeforce's AI agent for software development.",
        featured: false
    },
    {
        id: 19,
        name: "Phind",
        url: "https://www.phind.com",
        category: "Coding",
        badge: "Search",
        icon: "fa-magnifying-glass-location",
        desc: "Search engine for developers.",
        featured: false
    },

    // --- Open Source LLMs ---
    {
        id: 20,
        name: "Llama",
        url: "https://www.llama.com",
        category: "Open Source",
        badge: "Meta",
        icon: "fa-lambda",
        desc: "Meta's open source large language model.",
        featured: false
    },
    {
        id: 21,
        name: "Mistral",
        url: "https://mistral.ai",
        category: "Open Source",
        badge: "Efficient",
        icon: "fa-cloud",
        desc: "High-performance open source models.",
        featured: false
    },
    {
        id: 22,
        name: "Qwen",
        url: "https://qwenlm.ai",
        category: "Open Source",
        badge: "Alibaba",
        icon: "fa-code-branch",
        desc: "Alibaba's large language model series.",
        featured: false
    },
    {
        id: 23,
        name: "Gemma",
        url: "https://ai.google.dev/gemma",
        category: "Open Source",
        badge: "Google",
        icon: "fa-shapes",
        desc: "Google's open model for developers.",
        featured: false
    },
    {
        id: 24,
        name: "Cohere",
        url: "https://cohere.com",
        category: "Open Source",
        badge: "Enterprise",
        icon: "fa-network-wired",
        desc: "Enterprise-grade LLMs for business.",
        featured: false
    },
    {
        id: 25,
        name: "Falcon",
        url: "https://falconllm.tii.ae",
        category: "Open Source",
        badge: "TII",
        icon: "fa-falcon",
        desc: "Technology Innovation Institute's LLM.",
        featured: false
    },

    // --- AI Development Platforms ---
    {
        id: 26,
        name: "Hugging Face",
        url: "https://huggingface.co",
        category: "Dev",
        badge: "Community",
        icon: "fa-face-smile",
        desc: "The AI community building the future.",
        featured: false
    },
    {
        id: 27,
        name: "OpenAI API",
        url: "https://platform.openai.com",
        category: "Dev",
        badge: "API",
        icon: "fa-plug",
        desc: "API platform for GPT models.",
        featured: false
    },
    {
        id: 28,
        name: "Google AI Studio",
        url: "https://aistudio.google.com",
        category: "Dev",
        badge: "Tools",
        icon: "fa-palette",
        desc: "Build with Google's Gemini models.",
        featured: false
    },
    {
        id: 29,
        name: "Anthropic API",
        url: "https://www.anthropic.com",
        category: "Dev",
        badge: "API",
        icon: "fa-server",
        desc: "API for Claude models.",
        featured: false
    },

    // --- Top AI Companies ---
    {
        id: 30,
        name: "OpenAI",
        url: "https://openai.com",
        category: "Company",
        badge: "Creator",
        icon: "fa-lightbulb",
        desc: "The company behind ChatGPT and GPT-4.",
        featured: false
    },
    {
        id: 31,
        name: "Google DeepMind",
        url: "https://deepmind.google",
        category: "Company",
        badge: "Research",
        icon: "fa-brain",
        desc: "Google's AI research division.",
        featured: false
    },
    {
        id: 32,
        name: "Anthropic",
        url: "https://www.anthropic.com",
        category: "Company",
        badge: "Safety",
        icon: "fa-shield-halved",
        desc: "AI safety company behind Claude.",
        featured: false
    },
    {
        id: 33,
        name: "xAI",
        url: "https://x.ai",
        category: "Company",
        badge: "Elon",
        icon: "fa-rocket",
        desc: "Elon Musk's AI company building Grok.",
        featured: false
    },
    {
        id: 34,
        name: "Mistral AI",
        url: "https://mistral.ai",
        category: "Company",
        badge: "European",
        icon: "fa-wind",
        desc: "French AI lab building open models.",
        featured: false
    },
    {
        id: 35,
        name: "Perplexity AI",
        url: "https://www.perplexity.ai",
        category: "Company",
        badge: "Search",
        icon: "fa-compass",
        desc: "AI-powered answer engine company.",
        featured: false
    }
];

// --- 2. State Management ---
let currentFavorites = JSON.parse(localStorage.getItem('aiFavorites')) || [];
let currentCategory = 'all';
let searchQuery = '';
let isFavoritesView = false;

// --- 3. DOM Elements ---
document.addEventListener('DOMContentLoaded', () => {
    // Remove loader
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }, 800);

    // Initial Render
    initStats();
    renderGrid(aiData);
    setupEventListeners();
});

// --- 4. Functions ---

// Update Statistics in Hero
function initStats() {
    const stats = {
        assistants: aiData.filter(ai => ai.category === 'Chat').length,
        coding: aiData.filter(ai => ai.category === 'Coding').length,
        companies: aiData.filter(ai => ai.category === 'Company').length + aiData.filter(ai => ai.category === 'Open Source').length + aiData.filter(ai => ai.category === 'Dev').length
    };

    animateCounter('stat-assistants', stats.assistants);
    animateCounter('stat-coding', stats.coding);
    animateCounter('stat-companies', stats.companies);
    // Add a dummy for 'Dev Platforms' visualization or count Devs
    const devCount = aiData.filter(ai => ai.category === 'Dev').length;
    document.getElementById('stat-dev').textContent = devCount;
}

function animateCounter(elementId, target) {
    const el = document.getElementById(elementId);
    let count = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            el.textContent = target + '+';
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(count);
        }
    }, 30);
}

// Render the Grid
function renderGrid(data) {
    const grid = document.getElementById('ai-grid');
    const noResults = document.getElementById('no-results');
    const resultCount = document.getElementById('result-count');
    
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.style.display = 'none';
        noResults.classList.remove('hidden');
        resultCount.textContent = `0 tools found`;
        return;
    }

    grid.style.display = 'grid';
    noResults.classList.add('hidden');
    resultCount.textContent = `Showing ${data.length} tools`;

    data.forEach(ai => {
        const isFav = currentFavorites.includes(ai.id);
        const card = document.createElement('div');
        card.className = 'card glass';
        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon">
                    <i class="fa-solid ${ai.icon}"></i>
                </div>
                <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${ai.id}" aria-label="Toggle Favorite">
                    <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                </button>
            </div>
            <div class="card-body">
                <span class="badge">${ai.badge}</span>
                <h3>${ai.name}</h3>
                <p class="desc">${ai.desc}</p>
                <div class="meta">
                    <span class="category"><i class="fa-solid fa-tag"></i> ${ai.category}</span>
                </div>
            </div>
            <a href="${ai.url}" target="_blank" class="visit-btn">
                Visit Website <i class="fa-solid fa-arrow-right"></i>
            </a>
        `;
        grid.appendChild(card);
    });
}

// Filter Logic
function filterData() {
    let filtered = aiData;

    // 1. Filter by Category
    if (currentCategory !== 'all') {
        if (currentCategory === 'featured') {
            filtered = filtered.filter(ai => ai.featured);
        } else {
            filtered = filtered.filter(ai => ai.category === currentCategory);
        }
    }

    // 2. Filter by Favorites
    if (isFavoritesView) {
        filtered = filtered.filter(ai => currentFavorites.includes(ai.id));
    }

    // 3. Filter by Search
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(ai => 
            ai.name.toLowerCase().includes(query) || 
            ai.category.toLowerCase().includes(query) ||
            ai.desc.toLowerCase().includes(query)
        );
    }

    renderGrid(filtered);
}

// Toggle Favorite
function toggleFavorite(id) {
    if (currentFavorites.includes(id)) {
        currentFavorites = currentFavorites.filter(favId => favId !== id);
    } else {
        currentFavorites.push(id);
    }
    localStorage.setItem('aiFavorites', JSON.stringify(currentFavorites));
    filterData(); // Re-render to show filled heart
}

// Setup Event Listeners
function setupEventListeners() {
    // Search Input
    document.getElementById('search-input').addEventListener('input', (e) => {
        searchQuery = e.target.value;
        filterData();
    });

    // Category Buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');
            // Update state
            currentCategory = btn.dataset.category;
            // Reset favorites view if switching category
            if(isFavoritesView) {
                isFavoritesView = false;
                document.getElementById('fav-filter-btn').classList.remove('active');
            }
            filterData();
        });
    });

    // Favorites Toggle
    document.getElementById('fav-filter-btn').addEventListener('click', (e) => {
        isFavoritesView = !isFavoritesView;
        e.currentTarget.classList.toggle('active');
        
        // Deselect other filters if viewing favorites
        if (isFavoritesView) {
            currentCategory = 'all';
            filterBtns.forEach(b => b.classList.remove('active'));
            filterBtns[0].classList.add('active'); // Highlight 'All'
        }
        filterData();
    });

    // Card Delegation (for dynamic buttons)
    document.getElementById('ai-grid').addEventListener('click', (e) => {
        const favBtn = e.target.closest('.fav-btn');
        if (favBtn) {
            const id = parseInt(favBtn.dataset.id);
            toggleFavorite(id);
        }
    });

    // Scroll to Top
    const scrollBtn = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.classList.remove('hidden');
        } else {
            scrollBtn.classList.add('hidden');
        }
    });
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    const isDarkMode = localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme');
    
    if (!isDarkMode) {
        document.body.classList.add('light-mode');
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        themeBtn.innerHTML = isLight ? 
            '<i class="fa-solid fa-sun"></i>' : 
            '<i class="fa-solid fa-moon"></i>';
    });
}