let data = [
{
  id: 1,
  name: "Android",
  description: "Android is Linux without any GNU. Google backs Android, which can be found in the wild in phones, tablets and other devices. These devices usually contain proprietary software, and some of the available apps are proprietary as well. See the Android Open Source Project for the open source parts. Android was first announced November 5, 2007. Android 1.5 (Cupcake) was released April 30, 2009. Android 4.4 (KitKat) was released October 31, 2013. Android 5.1 (Lolipop) was announced March 9, 2015. Android 6.0 (Marshmallow) was released September 2015. Android 7.1.2 (Nougat) was released April 3, 2017. Android 8.1 (Oreo) was released December 5, 2017. Android 9 (Pie) was released August 6, 2018. Android 10 (no more names) was released September 3, 2019. Android 11 was released September 8, 2020.",
  site: "http://www.android.com",
  img: "android.png"
},
{
  id: 2,
  name: "Debian GNU/Linux",
  description: "The Debian Project is one of the oldest distributions, dating back to 1993, and is currently the largest volunteer-based distribution provider. Debian, the \"universal operating system\", has been translated into many languages; works on many hardware platforms; has a large repository with a wide variety of packages; includes experimental kernel variants for kfreebsd and the GNU Hurd; and has many derivatives. Debian Stable releases when ready, not on any fixed schedule, but stable releases happen about every two years and are supported for about 3 years. The LTS team provides commercial support for old-stable releases with security updates for a reduced set of packages after the Debian security team ends official support. The Debian testing branch (currently 11.0 'bullseye') is where the next stable release is prepared; packages are more current than stable while (usually) providing a stable desktop. The unstable branch (sid) is more bleeding edge, while the experimental branch contains packages that aren't yet ready for sid. Debian 12 will be named \"bookworm\". Debian 9.0 \"stretch\" was released June 17, 2017. The 13th and final \"stretch\" point release, Debian 9.13, was released July 18, 2020. The LTS team will take over maintenance of 'stretch'. Debian 10.0 'buster' was released July 6, 2019. The sixth \"buster\" point release, Debian 10.6, was released September 28, 2020.",
  site: "http://www.debian.org",
  img: "debian.png"
},
{
  id: 3,
  name: "Fedora",
  description: "The Fedora Project is Red Hat's community distribution. It is intended to be a fast-paced distribution for those that like to stay on the leading edge of technology. It is also a test-bed for Red Hat's Enterprise Linux products. The first Fedora Core release was dated November 5, 2003. Fedora strives for a new release every 6 months and releases will be supported for about 13 months. Fedora Editions include Workstation and Server, with CoreOS and IoT in preview. Workstation comes with the GNOME desktop, while Fedora Spins provide alternate desktops. Fedora Labs target a variety of use cases, such as astronomy, design, scientific computing, and more. A number of architectures are supported.  Still supported: Fedora 31 (released October 29, 2019), Fedora 32 (released April 28, 2020), and Fedora 33 (released October 27, 2020).",
  site: "http://fedoraproject.org",
  img: "fedora.png"
},
{
  id: 4,
  name: "openSUSE",
  description: "The openSUSE community distribution is supported by SUSE. openSUSE was opened for community development with the release of SUSE Linux 10.0, dated October 6, 2005. openSUSE used to offer a new release every 8 months with 18 months of support, but now offers two options. Tumbleweed uses a rolling release model that updates to the latest stable software, with frequent snapshots. The more conservative openSUSE Leap is based on core SUSE Linux Enterprise (SLE) components with more up-to-date applications. Its releases follow SLE service packs, with the initial release (42.1) based on SLE 12 SP1. Leap 42.1 was was released November 4, 2015 and reached eol May 16, 2017. With the following release, openSUSE Leap 15 (with SLE 15 components), version numbers for SLES and Leap were aligned. Leap 15.0 was released May 25, 2018 and reached eol December 3, 2019. Leap 15.1 was released May 22, 2019. Leap 15.2 was released July 2, 2020.",
  site: "http://opensuse.org",
  img: "opensuse.png"
},
{
  id: 5,
  name: "Red Hat Enterprise Linux",
  description: "Red Hat, Inc. provides one of the the best known Linux distributions in the world. In 2003 the company announced its decision to drop its popular Red Hat Linux in order to concentrate on the Red Hat Enterprise Linux line. The Fedora Project has replaced the Red Hat Linux line for the home user or small business. Red Hat Linux 9 was the last release in the Red Hat Linux series. It was released April 7, 2003 and was supported until May 1, 2004. Red Hat Enterprise Linux comes with service and support contracts for those Red Hat customers who require a stable, supported system. There are a number of other Red Hat products for cloud environments. Red Hat was acquired by IBM in July 2019, however no changes are planned for RHEL products and services, or for Fedora and CentOS. Supported versions: RHEL 6 was released November 10, 2010; now at update 6.10, released June 10, 2018. RHEL 7 was released June 10, 2014; now at update 7.9, released September 29, 2020. RHEL 8 was released May 7, 2019, now at update 8.3, released October 29, 2020.",
  site: "http://redhat.com/",
  img: "redhat.png"
},
{
  id: 6,
  name: "Slackware Linux",
  description: "The Slackware project is headed by Patrick J. Volkerding, with a cast of volunteers and a loyal following. It is the oldest active Linux distribution with the first release dated July 16, 1993. For a very long time the official Slackware project only supported x86 platforms, however others have made ports to other platforms. In 2009 the x86_64 port and the ARM port were offically accepted into Slackware. Slackware 13.37 was released April 27, 2011. Slackware 14.0 was released September 26, 2012. The ARM port of Slackware 14.0 was released September 28, 2012. Slackware 14.1 was released November 7, 2013. Slackware 14.2 was released July 1, 2016.",
  site: "http://www.slackware.com/",
  img: "slackware.png"
},
{
  id: 7,
  name: "Ubuntu",
  description: "Kubuntu, Xubuntu, Ubuntu Studio, Lubuntu, Ubuntu Kylin, Ubuntu MATE, and Ubuntu Budgie.  Ubuntu is supported by Canonical Ltd. The offical 'flavors' listed above use the Ubuntu repositories and infrastructure, but are supported by the community. Ubuntu takes a snapshot of Debian unstable and then creates a small fork, recompiling and stabilizing the code to get a final stable release. Ubuntu releases happen every 6 months, in April and October. Ubuntu comes with the GNOME desktop, Kubuntu with the KDE Plasma desktop, Xubuntu features XFCE, Ubuntu Studio integrates packages for multimedia creation, Lubuntu comes with the LXQt desktop environment, Ubuntu Kylin has been localized and customized for users in China, Ubuntu MATE features the MATE desktop, and Ubuntu Budgie features the Budgie desktop.  The first Ubuntu release was 4.10 Preview \"Warty Warthog\", released September 15, 2004. Ubuntu LTS releases are supported for 5 years. Flavors usually have shorter LTS support windows. Non-LTS releases are supported for 9 months. Ubuntu 21.04 \"Hirsute Hippo\" is open for development.",
  site: "http://www.ubuntu.com/",
  img: "ubuntu.png"
},
{
  id: 8,
  name: "Arch Linux",
  description: "Arch Linux is a lightweight and flexible distribution that tries to Keep It Simple. It contains the latest stable versions of software. Packages are in .tar.gz format and are tracked by the Pacman package manager, which is designed to allow easy package upgrades. There are few releases in the traditional meaning. A steady stream of package updates are available. New installion media does come out occasionally. The inital version, 0.1, was released March 11, 2002. x86_64 support was added in April 2006. The numbering scheme for Arch installtion media was changed to yyyy.mm format with the August 2009 release. The Arch Linux 2012.10.06 install media boots with systemd. Arch Linux 2020.07.01 is out. New ISOs are coming out monthly.",
  site: "http://www.archlinux.org/",
  img: "archlinux.png"
},
{
  id: 9,
  name: "CentOS",
  description: "CentOS, the Community ENTerprise Operating System, is an Enterprise-class Linux Distribution derived from Red Hat Enterprise Linux sources. Red Hat is a sponsor of CentOS. CentOS aims to be 100% binary compatible. (CentOS mainly changes packages to remove upstream vendor branding and artwork.) There are also Special Interest Groups (SIGs) extending CentOS in various ways. This project dates back to late 2003. CentOS 6.0 was released July 11, 2011. CentOS 6.10 was released July 3, 2018 (eol November 30, 2020). CentOS 7.0-1406 was released July 7, 2014. CentOS 7.8-2003 was released April 27, 2020. CentOS 8.2-2004 was released June 15, 2020.",
  site: "http://www.centos.org/",
  img: "centos.png"
},
{
  id: 10,
  name: "Linux Mint",
  description: "Linux Mint aims to produce an elegant, up to date and comfortable GNU/Linux desktop based on Ubuntu. It started out as a customized version of Ubuntu, but the project now develops many of its own tools and provides alternative desktops (MATE and Cinnamon). It is compatible with Ubuntu repositories. Linux Mint 5 \"Elyssa\" was released June 8, 2008 and was supported until April 25, 2011. The Mint project decided to track only Ubuntu LTS releases, starting with v17 \"Qiana\". Official releases come with MATE or Cinnamon and are joined by Xfce and KDE community editions.",
  site: "http://linuxmint.com",
  img: "linuxmint.png"
}
]

export default data;
