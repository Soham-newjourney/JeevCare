/**
 * JeevCare UI Component Injector
 * Handles dynamic rendering of Navbars and Sidebars across the application
 */

const Layout = {

    renderPublicNav(targetId, activePage) {
        const el = document.getElementById(targetId);
        if (!el) return;

        const navHtml = `
        <nav class="navbar">
            <div class="container nav-container" style="max-width: 100%; padding: 0 40px;">
                
                <a href="/index.html" class="nav-logo">
                    <img src="logo.png" class="logo-img" alt="JeevCare Logo">
                    <span>JeevCare</span>
                </a>

                <button class="mobile-menu-toggle" id="publicMobileMenuBtn" style="display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer;">☰</button>

                <div class="nav-links">
                    <a href="/about.html" style="${activePage === 'about' ? 'color: var(--brand-primary); font-weight: 700;' : ''}">About</a>
                    <a href="/faq.html" style="${activePage === 'faq' ? 'color: var(--brand-primary); font-weight: 700;' : ''}">FAQ</a>
                    <a href="/contact.html" style="${activePage === 'contact' ? 'color: var(--brand-primary); font-weight: 700;' : ''}">Contact</a>
                    <a href="/auth/login.html" class="btn btn-outline" style="padding: 8px 16px;">Login</a>
                    <a href="/auth/register-citizen.html" class="btn btn-primary" style="padding: 8px 16px;">Join Network</a>
                </div>

            </div>
        </nav>

        <aside class="dash-sidebar public-sidebar" id="publicMobileSidebar" style="padding-top: 80px; position: fixed; top: 0; left: 0;">
            <a href="/about.html" class="nav-item">📖 About</a>
            <a href="/faq.html" class="nav-item">❓ FAQ</a>
            <a href="/contact.html" class="nav-item">📞 Contact</a>

            <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">

            <a href="/auth/login.html" class="nav-item" style="color: var(--brand-primary); font-weight: 600;">🚪 Login</a>

            <div style="padding: 0 16px;">
                <a href="/auth/register-citizen.html" class="btn btn-primary" style="width: 100%; margin-top: 10px; display: block;">Join Network</a>
            </div>

        </aside>

        <div class="sidebar-overlay" id="publicSidebarOverlay"></div>
        `;

        el.outerHTML = navHtml;

        setTimeout(() => {
            const toggleBtn = document.getElementById('publicMobileMenuBtn');
            const sidebar = document.getElementById('publicMobileSidebar');
            const overlay = document.getElementById('publicSidebarOverlay');

            if (toggleBtn && sidebar && overlay) {

                toggleBtn.addEventListener('click', () => {
                    sidebar.classList.toggle('open');
                    overlay.classList.toggle('open');
                });

                overlay.addEventListener('click', () => {
                    sidebar.classList.remove('open');
                    overlay.classList.remove('open');
                });

            }

        }, 100);
    },


    renderAppNav(targetId, roleDisplay) {

        const el = document.getElementById(targetId);
        if (!el) return;

        const navHtml = `
        <nav class="navbar" style="border-bottom: 1px solid #eee;">
            <div class="container nav-container" style="max-width: 100%; padding: 0 40px;">
                
                <a href="#" class="nav-logo">
                    <img src="logo.png" class="logo-img" alt="JeevCare Logo">
                    <span>JeevCare</span>
                    <span style="font-size:0.9rem; color:#6b7280; margin-left:10px; font-weight:400;">
                        ${roleDisplay}
                    </span>
                </a>

                <button class="mobile-menu-toggle" id="mobileMenuBtn" style="display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer;">☰</button>

                <div class="nav-links">
                    <span id="userName" style="font-weight: 600;"></span>
                    <button onclick="window.API.logout()" class="btn btn-outline" style="padding: 6px 14px; font-size:0.9rem;">Logout</button>
                </div>

            </div>
        </nav>
        `;

        el.outerHTML = navHtml;

        if (window.API && window.API.getToken()) {

            const userStr = localStorage.getItem('jeevcare_user');

            if (userStr) {

                try {

                    const user = JSON.parse(userStr);
                    const nameEl = document.getElementById('userName');

                    if (nameEl) nameEl.innerText = user.name || 'User';

                } catch (e) {}

            }

        }

    },


    renderSidebar(targetId, role, activePage) {

        const el = document.getElementById(targetId);
        if (!el) return;

        const roleMenus = {
            citizen: [
                { name: 'Dashboard', url: '/citizen/dashboard.html', id: 'dashboard', icon: '🏠' },
                { name: 'Report Emergency', url: '/citizen/report.html', id: 'report', icon: '⚠️' },
                { name: 'My Reports', url: '/citizen/my-reports.html', id: 'history', icon: '📄' },
                { name: 'Adopt/Foster', url: '/citizen/adopt.html', id: 'adopt', icon: '❤️' }
            ],

            ngo: [
                { name: 'Dashboard', url: '/ngo/dashboard.html', id: 'dashboard', icon: '🏠' },
                { name: 'Cases Pool', url: '/ngo/cases-pool.html', id: 'pool', icon: '📦' },
                { name: 'Active Cases', url: '/ngo/active-cases.html', id: 'active', icon: '⚡' }
            ],

            authority: [
                { name: 'Analytics', url: '/authority/dashboard.html', id: 'dashboard', icon: '📊' },
                { name: 'Reports', url: '/authority/reports.html', id: 'reports', icon: '📄' }
            ]
        };

        let linksHtml = '';

        if (roleMenus[role]) {

            linksHtml = roleMenus[role].map(m => `
                <a href="${m.url}" class="nav-item ${activePage === m.id ? 'active' : ''}">
                    <span>${m.icon}</span> ${m.name}
                </a>
            `).join('');

        }

        const sidebarHtml = `
            <aside class="dash-sidebar" id="mobileSidebar">

                ${linksHtml}

                <a href="#" onclick="window.API.logout()" class="nav-item" style="color: var(--color-danger);">
                    🚪 Logout
                </a>

            </aside>

            <div class="sidebar-overlay" id="sidebarOverlay"></div>
        `;

        el.outerHTML = sidebarHtml;

    }

};

window.Layout = Layout;
