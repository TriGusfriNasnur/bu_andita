
<?php/***************************************************************************
 *                                                                              *
 *                                    MENU KIRI                                 *
 *                                                                              *
 ******************************************************************************/?>

<div id="sidebar" class="active">
    <div class="sidebar-wrapper active">
        <div class="sidebar-header">
            <div class="d-flex justify-content-between">
                <div class="logo">
                    <a href="./">Al Ihsan 
                        <p>Al Islamy</p></a>
                </div>
                <div class="toggler">
                    <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
                </div>
            </div>
        </div>
        <div class="sidebar-menu">
            <ul class="menu">
                <li class="sidebar-title">Menu</li>

                <li class="sidebar-item">
                    <a href="./" class='sidebar-link'>
                        <i class="bi bi-grid-fill"></i>
                        <span>Beranda</span>
                    </a>
                </li>

                <li class="sidebar-item  has-sub">
                    <a href="#" class='sidebar-link'>
                        <i class="bi bi-file-earmark-spreadsheet-fill"></i>
                        <span>Karyawan & Kriteria</span>
                    </a>
                    <ul class="submenu ">
                        <li class="submenu-item ">
                            <a href="alternatif.html">Karyawan</a>
                        </li>
                        <li class="submenu-item ">
                            <a href="bobot.html">Kriteria</a>
                        </li>
                    </ul>
                </li>

                <li class="sidebar-item">
                    <a href="matrik.html" class='sidebar-link'>
                        <i class="bi bi-pentagon-fill"></i>
                        <span>Perhitungan</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a href="preferensi.html" class='sidebar-link'>
                        <i class="bi bi-bar-chart-fill"></i>
                        <span>Peringkat</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a href="logout.html" class='sidebar-link'>
                        <i class="bi bi-box-arrow-right"></i>
                        <span>Keluar</span>
                    </a>
                </li>

            </ul>
        </div>
        <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
    </div>
</div>
