<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
header.header
  .header-sub-content
    .sub-content-inner
      .selling-notice
        .swiper
          .swiper-wrapper.notice-wrap
            .swiper-slide
              a.notice-item(
                href="/"
              )
                | 1. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            .swiper-slide
              a.notice-item(
                href="/"
              )
                | 2. Nobis quisquam enim quibusdam libero sapiente possimus odio?
      nav.sub-links
        ul.sub-links-inner
          li
            a.sub-link-item(
              href="/"
            )
              SvgIcon.icon(
                icon-name="jewelry"
              )
              | VIP Club
          li
            a.sub-link-item(
              href="/"
            )
              SvgIcon.icon(
                icon-name="location-solid"
              )
              | Our Stories
          li
            a.sub-link-item(
              href="/"
            )
              SvgIcon.icon(
                icon-name="contact-us"
              )
              | Contact Us
  .header-content
    .content-inner
      a#site-logo-full(
        href="/en"
        title=""
      )
        .logo-wrap
          img.type-full(
            src="@/assets/images/logo.png"
            alt=""
          )
          img.type-fold(
            src="@/assets/images/logo_fold.png"
            alt=""
          )
      .header-content-left
      .header-content-right
        .head-banner-item
          .head-locale-select
            .head-locale-select-inner
              button.head-locale-current
                .locale-item
                  .locale-label.
                    EN
                  .locale-arrow
                    SvgIcon(
                      icon-name="arrow-up"
                    )
              .head-locale-options
                ul
                  li
                    button.update-locale(
                      data-locale="tc"
                    )
                      .locale-item
                        .locale-label.
                          繁
                  li
                    button.update-locale(
                      data-locale="sc"
                    )
                      .locale-item
                        .locale-label.
                          简
        .head-banner-item.search-btn
          button.head-search-btn
            SvgIcon.icon(
              icon-name="search"
            )
      .header-hamberger
        .btn-mobile-nav
          .btn-mobile-nav-inner
            div
            div
            div
  HeaderNavMobile
  .header-navigation
    .header-navigation-inner
      .main-navigation-fold-item
        .fold-item-left
          a.logo-fold(
            href="/en"
          )
            img(
              src="@/assets/images/logo_fold.png"
              alt=""
            )
        .fold-item-right
          .head-locale-select
            .head-locale-select-inner
              button.head-locale-current
                .locale-item
                  .locale-label.
                    EN
                  .locale-arrow
                    SvgIcon(
                      icon-name="arrow-up"
                    )
              .head-locale-options
                ul
                  li
                    button.update-locale(
                      data-locale="tc"
                    )
                      .locale-item
                        .locale-label.
                          繁
                  li
                    button.update-locale(
                      data-locale="sc"
                    )
                      .locale-item
                        .locale-label.
                          简
          .search-btn
            button.head-search-btn
              SvgIcon.icon(
                icon-name="search"
              )
      nav.main-navigation
        ul
          li
            a.nav-item(
              href="/"
            )
              | Celebrity Picks
          li
            button.nav-item.has-sub
              | Jewellery
            .nav-item-sub-menu
              .sub-menu-inner
                .sub-menu-group.sub-menu-has-nav
                  nav.sub-menu-nav
                    ul
                      li
                        button.select-group(
                          data-target="signature"
                        )
                          | Signature Collections
                      li
                        button.select-group(
                          data-target="jewelly"
                        )
                          | All Jewellry
                      li
                        button.select-group(
                          data-target="gold"
                        )
                          | Gold Price
                      li
                        button.select-group(
                          data-target="gifts"
                        )
                          | Gifts
                      li
                        button.select-group(
                          data-target="cares"
                        )
                          | Jewellery Cares
                  .sub-menu-nav-bg
                  .sub-menu-group-content
                    .group-content-inner
                      .group-content-detail#group-signature
                        .swiper.signature-list
                          ButtonController(
                            direction="prev"
                          )
                          ButtonController(
                            direction="next"
                          )
                          .swiper-wrapper
                            .swiper-slide(
                              v-for="item in 7"
                            )
                              HeaderSubNavListItem
                      .group-content-detail#group-jewelly
                        HeaderContentCategory
                      .group-content-detail#group-gold
                        HeaderContentCategory
                      .group-content-detail#group-gifts
                        HeaderContentCategory
                      .group-content-detail#group-cares
                        HeaderContentCategory
          li
            button.nav-item.has-sub
              | Love & Engagement
            .nav-item-sub-menu
              .sub-menu-inner
                .sub-menu-group
                  .sub-menu-group-content
                    .group-content-inner
                      HeaderContentThumbList
          li
            a.nav-item(
              href="/"
            )
              | Rolex
          li
            a.nav-item(
              href="/"
            )
              | Tudor
          li
            a.nav-item(
              href="/"
            )
              | Patek Philippe
          li
            a.nav-item(
              href="/"
            )
              | Other Watches
          li
            button.nav-item.has-sub
              | Our Company
            .nav-item-sub-menu
              .sub-menu-inner
                .sub-menu-group
                  .sub-menu-group-content
                    .group-content-inner
                      HeaderContentSpreadList
      .main-navigation-sub-menu-bg
</template>

<style lang="scss">
@import "@/assets/css/mixin";

.header {
  background-color: #fff;
  position:fixed;
  z-index: var(--zindex-header);
  top:0;
  left:0;
  width:100%;

  -webkit-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.1);
  box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.1);

  &.fold {
    .header-content {
      height:50px;
      transition: height var(--root--duration--fast) ease-in-out;

      @include breakpoint-min($nav){
        height:1px;
        overflow: hidden;
      }
    }

    .header-navigation {
      .header-navigation-inner {

        .head-locale-select, .search-btn, .logo-fold {
          pointer-events: auto;
        }

        .main-navigation-fold-item {
          opacity: 1;
        }
      }
    }
    @include breakpoint-max($nav){
      #site-logo-full {
        .type-full {
          opacity: 0;
        }
        .type-fold {
          opacity: 1;
        }
      }
    }
  }

  &.disabled {
    .header-content {
      overflow: hidden;
    }
  }

  .group-sub-title {
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--color--brown-3);
    margin-bottom:0.5rem;
  }
}

.header-sub-content {
  color:#ffffff;
  background-color: var(--color--highlight);
  .sub-content-inner {
    display: flex;
    justify-content: space-between;
    @include innerContent;
    padding:0;
    height:30px;
    line-height: 30px;

    @include breakpoint-min($nav){
      padding:0 var(--root--spacing--side);
      height:40px;
      line-height: 40px;
    }
  }

  ::-moz-selection { /* Code for Firefox */
    color: var(--color--highlight);
    background: #ffffff;
  }

  ::selection {
    color: var(--color--highlight);
    background: #ffffff;
  }
}

.header-content {
  position: relative;
  z-index:10;
  border-bottom:1px solid #F0F0F0;
  height:65px;
  transition: height var(--root--duration--fast) ease-in-out;

  @include breakpoint-min($nav){
    height:90px;
  }

  .content-inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    @include innerContent;
    height:100%;
    padding:10px 10px;

    @include breakpoint-min($nav){
      padding:10px var(--root--spacing--side);
    }
  }

  .header-content-left {
    display: none;
    @include breakpoint-min($nav){
      display: flex;
      gap: 1rem;
      .head-banner-item {
        display: block;
        height: 70px;
        img {
          width:auto;
          height:100%;
        }
      }
    }
  }

  .header-content-right {
    display: none;
    @include breakpoint-min($nav){
      display: inline-flex;
      gap:1rem;
      .head-banner-item {
        display: inline-flex;
        align-items: center;
      }

      .head-locale-select, .search-btn {
        pointer-events: auto;
      }
    }
  }

  .header-hamberger {
    display: block;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    cursor:pointer;

    @include breakpoint-min($nav){
      display: none;
    }

    .btn-mobile-nav {
      width:30px;
      height:30px;
      display: flex;
      align-items: center;
      justify-content: center;

      .btn-mobile-nav-inner {
        position: relative;
        width:20px;
        height:16px;
        > div {
          position: absolute;
          width:100%;
          height:2px;
          background-color: #131313;

          transition: width var(--root--duration--fast) ease-in-out,
                      opacity var(--root--duration--fast) ease-in-out,
                      transform var(--root--duration--fast) ease-in-out,
                      top var(--root--duration--fast) ease-in-out;

          &:nth-child(1) {
            top:0%;
          }
          &:nth-child(2) {
            top:50%;
            transform: translateY(-50%);
          }
          &:nth-child(3) {
            top:calc(100% - 2px);
          }
        }
      }

      &:hover {
        .btn-mobile-nav-inner {
          > div {
            background-color: var(--color--highlight);

            &:nth-child(1) {
              width:70%;
            }
            &:nth-child(2) {
              width:80%;
            }
            &:nth-child(3) {
              width:30%;
            }
          }
        }
      }

      &.active {
        .btn-mobile-nav-inner {
          > div {
            background-color: var(--color--highlight);

            &:nth-child(1) {
              width:100%;
              top:50%;
              transform: rotate(-45deg);
            }
            &:nth-child(2) {
              width:0%;
              opacity: 0;
            }
            &:nth-child(3) {
              width:100%;
              top:50%;
              transform: rotate(45deg);
            }
          }
        }
      }
    }
  }
}

#site-logo-full {
  width:130px;
  margin:0 auto;
  @include breakpoint-min($nav){
    position: absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width:206px;
    margin:0 auto;
    height:calc(100% - 20px);
    min-height:70px;
  }

  .logo-wrap {
    position: relative;
    height:100%;
    img {
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      max-height:100%;

      transition: opacity var(--root--duration--fast) ease-in-out;
    }
  }

  .type-fold {
    opacity: 0;
  }
}

#rolex-retailer {
  pointer-events: none;
  display: block;
  width:150px;
  height:70px;
}

.selling-notice {
  width:100%;

  .swiper-wrapper {
    @include breakpoint-max($nav){
      -webkit-transition-timing-function:linear;
      transition-timing-function:linear;
      position: relative;
    }
  }

  .swiper-slide {
    width:auto;
    padding-left:1rem;
  }
  @include breakpoint-min($nav){
    width:calc(100% - 320px);
    .swiper-slide {
      width:100%;
      padding:0;
    }
  }

  .notice-wrap {
    height:30px;
    @include breakpoint-min($nav){
      height:40px;
    }
  }
  .notice-item {
    display: inline-flex;
    align-items: center;
    font-size: 0.75rem;
    color:#ffffff;

    &:hover {
      opacity: 0.8;
    }

    &:after{
      content:"";
      display: block;
      width:7px;
      height:12px;
      margin-left:10px;
      background-image: url('$images/sprites/arrow-right.svg');
    }

    .notice-icon {
      display: block;
      color:#ffffff;
      height:12px;
      // margin-left:5px;
    }
  }
}

.sub-links {
  display: none;
  @include breakpoint-min($nav){
    display: block;
  }


  .sub-links-inner {
    display: flex;
    align-items: center;
    li {
      +li {
        margin-left:1.5rem;
      }
    }
    button, a {
      color:#ffffff;
      display: flex;
      align-items: center;

      &:hover, &:focus {
        opacity: 0.8;
      }
    }

    .sub-link-item {
      font-size: 0.75rem;
      .icon {
        max-width: 18px;
        margin-right:8px;
      }
    }
  }
}

// .head-locale-select, .search-btn {
//   pointer-events: auto;
// }

.search-btn {
  margin-left:1.5rem;
}

.head-search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width:40px;
  height:40px;
  border-radius: 50%;
  color:#ffffff;
  background-color: var(--color--brown-3);
  .icon {
    width:15px;
  }
}

.main-navigation-fold-item {
  .search-btn {
    margin-left:0.5rem;
  }
  .head-search-btn {
    background: none;
    color:var(--color--brown-3);
  }
}

.head-locale-select {
  .head-locale-select-inner {
    position: relative;
    .head-locale-current {
      cursor:pointer;
      color:var(--color-text);
    }
  }

  .head-locale-options {
    display: none;
    position:absolute;
    z-index:var(--zindex-footer-locale-option);
    width:100%;
    top:calc(100% + 10px);
    background-color: #fff;
    -webkit-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.1);
    box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.1);
    border-radius: 3px;
    pointer-events: auto;
    button, a {
      height:30px;
      line-height: 30px;
      padding-left:1rem;
      padding-right:1rem;

      &:hover, &:focus {
        background-color: var(--color--grey-1);
        color:var(--color--highlight);
        .locale-label {
          color:var(--color--highlight);
        }
      }
    }

    ul {
      li {
        + li {
          margin-top:0;
        }
      }
    }

    .locale-item {
      width:auto;
    }

    .locale-label {
      color:var(--color--text);
      text-align: center;
    }
  }

  .locale-item {
    pointer-events: none;
    position: relative;
    width:46px;
    display: flex;
    .locale-label {
      font-size: 0.875rem;
      font-weight: 500;
    }
    .locale-arrow {
      position: absolute;
      display: flex;
      top:50%;
      transform: translateY(-50%) rotate(180deg);
      right:0;
      width:18px;
      height:18px;
      color:var(--color--text);

      transition: transform var(--root--duration--fast) ease-in-out;
    }
  }

  &.active {
    .head-locale-options {
      display: block;
    }

    .locale-item {
      .locale-arrow {
        transform: translateY(-50%) rotate(0deg);
      }
    }
  }
}

.header-navigation {
  position: relative;
  z-index: 0;

  display: none;
  @include breakpoint-min($nav){
    display: block;
  }

  background-color: #fff;
  .header-navigation-inner {
    position: relative;
    z-index: 10;
    padding-bottom:0.5rem;
    display: flex;


    .main-navigation-fold-item {
      position: absolute;
      z-index: 0;
      height:100%;
      pointer-events: none;
      @include innerContent;
      left:50%;
      transform: translateX(-50%);
      opacity: 0;
      display: flex;
      justify-content: space-between;
      transition: opacity var(--root--duration--fast) ease-in-out;

      .fold-item-right {
        display: flex;
        align-items: center;
        margin-right:var(--root--spacing--side);
      }
    }

    .logo-fold {
      display: block;
      margin-top:0.5rem;
      margin-left:var(--root--spacing--side);
      width:34px;
    }
  }
}

.main-navigation {
  padding-top:1rem;
  width:900px;
  margin:0 auto;
  @include breakpoint-min(1300px){
    width:950px;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:1.5rem;

    @include breakpoint-min(1300px){
      gap:2rem;
    }
  }

  .nav-item {
    font-size: 0.875rem;
    font-weight: 500;
    color:var(--color--text);
    &:hover, &:focus {
      color: var(--color--highlight);
    }

    &.active {
      color: var(--color--highlight);
    }
  }
}

.nav-item-sub-menu {
  pointer-events: none;
  opacity: 0;
  position: absolute;
  z-index: var(--zindex-sub-menu-wrap);
  top:100%;
  background-color: var(--color--background);
  overflow: hidden;
  width:100%;
  top:100%;
  left:0;
  height:0px;
  transition: height var(--root--duration--fast) ease-in-out,
              opacity var(--root--duration--fast) ease-in-out;

  .sub-menu-inner {
    position: relative;
    @include innerContent;
    pointer-events: none;
    .sub-menu-group {
      padding:45px var(--root--spacing--side);
    }

    .swiper-slide {
      width:auto !important;
    }
  }

  &.active {
    opacity: 1;
    pointer-events: initial;
    transition: height var(--root--duration--fast) ease-in-out,
                opacity 0.5s ease-in-out;
    .sub-menu-inner {
      pointer-events: initial;
    }

    .sub-menu-nav-bg {
      opacity: 1;
      transition: opacity var(--root--duration--fast) ease-in-out, height 0.2s linear;
    }
  }
}

.sub-menu-has-nav {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-start;

  .sub-menu-nav {
    position: relative;
    z-index: 2;
    width:280px;

    ul {
      display: block;
      li  {
        + li {
          margin-top:1.5rem;
        }
      }
    }

    button, a {
      color:var(--color--text);
      font-weight: 500;

      &:hover, &:focus {
        color:var(--color--highlight);
      }

      &.active {
        color:var(--color--highlight);
      }
    }
  }

  .sub-menu-nav-bg {
    opacity: 1;
    position: absolute;
    z-index: 1;
    top:0px;
    display: block;
    @include wh100;
    left:calc(-100% + 280px);
    background-color: var(--color--background);
    transition: opacity var(--root--duration--fast) ease-in-out, 
                height var(--root--duration--fast) ease-in-out;
  }

  .sub-menu-group-content {
    position: relative;
    z-index: 0;
    width:calc(100% - 280px);
  }

  .signature-list {
    position: relative;
    overflow: inherit;

    .swiper-wrapper {
      position: relative;
      z-index:10;
    }
  }
}

.active {
  .group-content-detail {
    &.active {
      pointer-events: initial;
    }
  }
}

.group-content-detail {
  position:absolute;
  height:0px;
  pointer-events: none;
  opacity: 0;
  transition: none;

  &.active {
    position:static;
    height:auto;
    opacity: 1;
    transition: opacity var(--root--duration--fast) ease-in-out;
  }
}

.main-navigation-sub-menu-bg {
  position: absolute;
  z-index: var(--zindex-sub-menu-wrap-bg);
  background-color: var(--color--background);
  width:100%;
  top:100%;
  height:0px;
  transition: height var(--root--duration--fast) ease-in-out;
}
</style>
