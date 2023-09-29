<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.header-navigation-mob
  .header-navigation-mob-inner
    nav.mob-navigation
      ul
        li
          a.mob-nav-item(
            href="/"
          )
            | Celebrity Picks
        li
          button.mob-nav-item.has-sub(
            data-target="jewellery"
          )
            | Jewellery
            SvgIcon.icon(
              icon-name="arrow-right"
            )
        li
          button.mob-nav-item.has-sub(
            data-target="engagement"
          )
            | Love & Engagement
            SvgIcon.icon(
              icon-name="arrow-right"
            )
        li
          a.mob-nav-item(
            href="/"
          )
            | Rolex
        li
          a.mob-nav-item(
            href="/"
          )
            | Tudor
        li
          a.mob-nav-item(
            href="/"
          )
            | Patek Philippe
        li
          a.mob-nav-item(
            href="/"
          )
            | Other Watches
        li
          button.mob-nav-item.has-sub(
            data-target="our-company"
          )
            | Our Company
            SvgIcon.icon(
              icon-name="arrow-right"
            )
    .mob-nav-sub-content
      .mob-nav-sub-content-inner
        ul.mob-sub-links
          li
            a.mob-sub-link-item(
              href="/"
            )
              SvgIcon.icon(
                icon-name="jewelry"
              )
              | VIP Club
          li
            a.mob-sub-link-item(
              href="/"
            )
              SvgIcon.icon(
                icon-name="location"
              )
              | Our Stories
          li
            a.mob-sub-link-item(
              href="/"
            )
              SvgIcon.icon(
                icon-name="contact-us"
              )
              | Contact Us
        .mob-locale-select
          .mob-locale-select-inner
            .mob-locale-label.
              Change Language:
            .mob-locale-options
              ul
                li
                  button.update-locale.current(
                    data-locale="en"
                  )
                    .locale-item
                      .locale-label.
                        EN
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
        .mob-banners
          a.mob-banner-item(
            href="https://www.emperorwatchjewellery.com/en/product-list.php?brand=patek-philippe"
          )
            img(
              src="@/assets/images/head_banner_PatekPhilippe.jpg"
              alt=""
            )
          a.mob-banner-item(
            href="https://eshop.emperorwatchjewellery.com/en/tudor_collection.php"
            target="_blank"
          )
            img(
              src="@/assets/images/head_banner_Tudor.png"
              alt=""
            )
          a.mob-banner-item.banner-rolex(
            href="/en/rolex"
          )
            | <iframe id="rolex-retailer" title="Rolex Official Retailer" src="https://static.rolex.com/retailers/clock/?colour=gold&amp;apiKey=673d1b8ef33025219f6d0663efdad6b8&amp;lang=en" scrolling="no" frameborder="no"></iframe>
    .mob-nav-sub-menu
      .mob-nav-sub-menu-inner
        .mob-nav-sub-menu-group#sub-jewellery
          .sub-menu-group-title
            button.btn-close-sub-menu(
              data-close="group"
            )
              SvgIcon.icon(
                icon-name="arrow-right"
              )
            | Jewellery
          .sub-menu-group-content
            nav.mob-navigation
              ul
                li
                  button.mob-nav-item.has-sub(
                    data-sub-target="signature-collections"
                  )
                    | Signature Collections
                    SvgIcon.icon(
                      icon-name="arrow-right"
                    )
                li
                  button.mob-nav-item.has-sub(
                    data-sub-target="all-jewellery"
                  )
                    | All Jewellery
                    SvgIcon.icon(
                      icon-name="arrow-right"
                    )
                li
                  a.mob-nav-item(
                    href="/"
                  )
                    | Gold Price
                li
                  button.mob-nav-item.has-sub(
                    data-sub-target="gift"
                  )
                    | Gift
                    SvgIcon.icon(
                      icon-name="arrow-right"
                    )
                li
                  a.mob-nav-item(
                    href="/"
                  )
                    | Jewellery Cares
        .mob-nav-sub-menu-group#sub-our-company
          .sub-menu-group-title
            button.btn-close-sub-menu(
              data-close="group"
            )
              SvgIcon.icon(
                icon-name="arrow-right"
              )
            | Our Company
          .sub-menu-group-content
            nav.mob-navigation
              ul
                li
                  button.mob-nav-item.has-sub(
                    data-sub-target="about-us"
                  )
                    | About Us
                    SvgIcon.icon(
                      icon-name="arrow-right"
                    )
        .mob-nav-sub-menu-group#sub-engagement
          .sub-menu-group-title
            button.btn-close-sub-menu(
              data-close="group"
            )
              SvgIcon.icon(
                icon-name="arrow-right"
              )
            | Love & Engagement
          .sub-menu-group-content
            .sub-menu-group-content-inner
              .group-content-detail-thumb-list
                HeaderSubNavListItem
                HeaderSubNavListItem
                HeaderSubNavListItem
                HeaderSubNavListItem
    .mob-nav-sub-menu-detail
      .mob-nav-sub-menu-detail-inner
        .mob-nav-sub-menu-group#sub-detail-signature-collections
          .sub-menu-group-title
            button.btn-close-sub-menu(
              data-close="detail"
            )
              SvgIcon.icon(
                icon-name="arrow-right"
              )
            | Signature Collections
          .sub-menu-group-content
            .sub-menu-group-content-inner
              HeaderContentCategory
        .mob-nav-sub-menu-group#sub-detail-all-jewellery
          .sub-menu-group-title
            button.btn-close-sub-menu(
              data-close="detail"
            )
              SvgIcon.icon(
                icon-name="arrow-right"
              )
            | All Jewellery
          .sub-menu-group-content
            .sub-menu-group-content-inner
              HeaderContentCategory
        .mob-nav-sub-menu-group#sub-detail-gift
          .sub-menu-group-title
            button.btn-close-sub-menu(
              data-close="detail"
            )
              SvgIcon.icon(
                icon-name="arrow-right"
              )
            | Gift
          .sub-menu-group-content
            .sub-menu-group-content-inner
              HeaderContentCategory
        .mob-nav-sub-menu-group#sub-detail-about-us
          .sub-menu-group-title
            button.btn-close-sub-menu(
              data-close="detail"
            )
              SvgIcon.icon(
                icon-name="arrow-right"
              )
            | About Us
          .sub-menu-group-content
            nav.mob-navigation
              ul
                li
                  a.mob-nav-item(
                    href="/"
                  )
                    | Brand Heritage
                li
                  a.mob-nav-item(
                    href="/"
                  )
                    | Chairperson's Profile
                li
                  a.mob-nav-item(
                    href="/"
                  )
                    | Event Highlights
                li
                  a.mob-nav-item(
                    href="/"
                  )
                    | Press Release
</template>

<style lang="scss">
@import "@/assets/css/mixin";
.header {
  &.fold {
    .header-navigation-mob {
      height:calc(100svh - 80px);
    }
  }
}

.header-navigation-mob {
  display: none;
  position: absolute;
  top:100%;
  width:100%;
  height:calc(100svh - 95px);
  background-color: var(--color--background);

  transition: height var(--root--duration--fast) ease-in-out;

  &.active {
    display: block;
  }

  @include breakpoint-min($nav){
    display:none;
  }

  .header-navigation-mob-inner {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width:100%;
    @include wh100;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &.open-subnav {
    .mob-nav-sub-menu {
      left:0%;
    }

    .header-navigation-mob-inner {
      overflow: hidden;
    }
  }

  &.open-subnav-detail {
    .mob-nav-sub-menu-detail {
      left:0%;
    }
  }
}

.sub-menu-group-content {
  @include breakpoint-max($nav){
    height:calc(100% - 52px);
    overflow-y: auto;
  }
}

.sub-menu-group-content-inner, 
.mob-navigation ul {
  padding:calc(var(--root--spacing--side) * 1) var(--root--spacing--side) calc(var(--root--spacing--side) * 2);
}

.mob-navigation {
  ul {
    li {
      + li {
        margin-top:0.8rem;
      }
    }
  }

  .mob-nav-item {
    position: relative;
    display: block;
    width:100%;
    text-align: left;
    font-size: 1rem;
    font-weight: 500;
    padding:5px 0;
    color: var(--color--brown-3);

    .icon {
      position: absolute;
      top:50%;
      right:0;
      width:8px;
      transform: translateY(-50%);
      color:var(--color--highlight);
    }

    &:hover {
      color:var(--color--highlight);
    }
  }

}

.mob-nav-sub-content {
  border-top:1px solid var(--color--border);
  .mob-nav-sub-content-inner {
    padding:calc(var(--root--spacing--side) * 2) var(--root--spacing--side);
  }
}

.mob-sub-links {
  li {
    + li {
      margin-top:0.875rem;
    }
  }

  .mob-sub-link-item {
    font-size: 0.75rem;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    color:var(--color--brown-3);
    line-height: 14px;
    padding:2px 2rem 2px 0;
    .icon {
      width:20px;
      height:14px;
      margin-right:5px;
    }

    &:hover, &:focus {
      color:var(--color--highlight);
    }
  }
}

.mob-locale-select {
  margin-top:1.5rem;
  .mob-locale-select-inner {
    display: flex;
    align-items: center;
    gap :1rem;

    .mob-locale-label {
      font-size: 0.75rem;
      font-weight: 500;
    }

    .mob-locale-options {
      ul {
        display: flex;
        li {
          + li {
            margin-left:1rem;
          }
        }
      }

      button {
        padding:3px 4px;
        border-radius: 3px;
        color:var(--color--brown-3);
        font-weight: 500;

        &:hover, &:focus {
          color :var(--color--highlight);
        }
      }
      .current {
        pointer-events: none;
        color:#ffffff;
        background-color: var(--color--highlight-hover);
      }
    }

    .locale-item {
      pointer-events: none;
    }
  }
}

.mob-banners {
  margin-top:1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap:0.5rem;

  .mob-banner-item {
    height:70px;
    img {
      width:auto;
      height:100%;
    }
  }
}

.mob-nav-sub-menu, .mob-nav-sub-menu-detail {
  position: absolute;
  top:0;
  left:100%;
  @include wh100;
  background-color: var(--color--background);
  transition: left var(--root--duration--fast) ease-in-out;
}

.mob-nav-sub-menu-detail-inner, .mob-nav-sub-menu-inner{
  position: relative;
  @include wh100;
  overflow: hidden;

  .mob-nav-sub-menu-group {
    position: relative;
    height:100%;
    z-index: 0;
    display: none;
    pointer-events: none;

    &.active {
      z-index: 1;
      display: block;
      pointer-events: initial;
    }
  }

  .sub-menu-group-title {
    border-bottom:1px solid var(--color--border);
    padding:calc(var(--root--spacing--side) * 1) var(--root--spacing--side) var(--root--spacing--side);
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  .btn-close-sub-menu {
    width:20px;
    display: flex;
    justify-content: flex-start;
    margin-right:0.5rem;
    .icon {
      width:8px;
      height:100%;
      transform: rotate(180deg);
    }
  }
}

.mob-nav-sub-menu {
  z-index: 0;
}

.mob-nav-sub-menu-detail {
  z-index: 1;
}
</style>
