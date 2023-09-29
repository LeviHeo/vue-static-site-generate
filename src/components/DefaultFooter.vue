<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
FooterBenefit
.footer-back-to-top
  button.back-to-top
    | Back To Top
    SvgIcon.icon(
      icon-name="arrow-up"
    )
footer.footer
  .footer-inner
    .footer-content
      .footer-group
        .group-head.
          Our Company
        .group-content
          ul
            li
              a(
                href="/en/brand-heritage"
                target="_self"
              )
                | About Us
            li
              a(
                href="/en/careers"
                target="_self"
              )
                | Careers
            li
              a(
                href="/en/contact"
                target="_self"
              )
                | Contact Us
      .footer-group
        .group-head.
          Legal
        .group-content
          ul
            li
              a(
                href="/en/disclaimer"
                target="_self"
              )
                | Disclaimer
            li
              a(
                href="/en/privacy"
                target="_self"
              )
                | Privacy Policy
      .footer-group.footer-sns
        .group-head.
          Follow Us
        .group-content
          ul
            li
              a(
                href="https://www.facebook.com/emperorwatchandjewellery"
                target="_blank"
              )
                SvgIcon(
                  icon-name="facebook"
                )
            li
              a(
                href="https://www.instagram.com/emperorwatchandjewellery"
                target="_blank"
              )
                SvgIcon(
                  icon-name="instagram"
                )
            li
              a(
                href="https://www.youtube.com/user/emperorwj/videos?view=0"
                target="_blank"
              )
                SvgIcon(
                  icon-name="youtube"
                )
            li
              a(
                href="http://e.weibo.com/u/3472651150"
                target="_blank"
              )
                SvgIcon(
                  icon-name="weibo"
                )
            li
              button.sns-wechat(
                data-popup="wechat-qrcode"
              )
                SvgIcon(
                  icon-name="wechat"
                )
      .footer-group.footer-locale
        .group-head.
          Location
        .group-content
          .locale-select
            .locale-select-inner
              button.locale-current
                .locale-item
                  .locale-label.
                    Hong Kong SAR China
                  .locale-arrow
                    SvgIcon(
                      icon-name="arrow-up"
                    )
              .locale-options
                ul
                  li
                    button.update-locale(
                      data-locale="en"
                    )
                      .locale-item
                        .locale-label.
                          Hong Kong
                  li
                    button.update-locale(
                      data-locale="sc"
                    )
                      .locale-item
                        .locale-label.
                          Mainland China
                  li
                    button.update-locale(
                      data-locale="my"
                    )
                      .locale-item
                        .locale-label.
                          Malaysia
                  li
                    button.update-locale(
                      data-locale="sg"
                    )
                      .locale-item
                        .locale-label.
                          Singapore
    .footer-copyright
      p.
        ©2023 XXX. ALL RIGHTS RESERVED.
</template>

<style lang="scss">
@import "@/assets/css/mixin";

.footer {
  background-color: var(--color--brown-3);
  color:#ffffff;

  .footer-inner {
    padding:calc(var(--root--spacing--side) * 2.5) var(--root--spacing--side) 0 var(--root--spacing--side);

    @include breakpoint-min($md){
      padding:calc(var(--root--spacing--side) * 1.5) var(--root--spacing--side) 0 var(--root--spacing--side);
    }
  }
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width:1024px;
  max-width: 100%;
  margin:0 auto;
  padding-bottom:1.5rem;
  gap: 2rem 1rem;

  @include breakpoint-min($md){
    flex-wrap: unset;
    gap:unset;
    padding-bottom:4.125rem;
  }

  .footer-group {
    width:calc(50% - 0.5rem);
    @include breakpoint-min($md){
      width:auto;
    }
    .group-head {
      color:#ffffff;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: var(--root-letter-spacing);

      + .group-content {
        margin-top:1rem;
      }
    }

    .group-content {
      a, button {
        color:#ffffff;
        font-size: 0.875rem;

        &:hover {
          color:var(--color--highlight);
        }
      }

      > ul {
        li {
          + li {
            margin-top:1rem;
          }
        }
      }
    }

    &.footer-locale {
      width:100%;
      @include breakpoint-min($sm){
        width:auto;
      }
    }

    &.footer-sns {

      width:100%;
      @include breakpoint-min($md){
        width:auto;
      }

      .group-content {
        ul {
          display: flex;
          align-items: center;
          gap:1.5rem;

          li {
            margin:0;
          }
        }
      }
    }
  }
}


.footer .locale-select{
  width:330px;
  max-width:100%;
  .locale-select-inner {
    position: relative;
  }

  .locale-current {
    width:100%;
    cursor:pointer;
    padding-bottom:5px;
    border-bottom:1px solid #ffffff;
  }

  .locale-item {
    pointer-events: none;
    position: relative;
    display: flex;
    align-items: center;
    height:30px;
    line-height: 30px;
  }

  .locale-icon {
    width:20px;
    height:20px;
    border-radius: 50%;
    overflow: hidden;
    margin-right:10px;
  }

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
    color:#ffffff;

    transition: transform var(--root--duration--fast) ease-in-out;
  }

  &.active {
    .locale-options {
      display: block;
    }

    .locale-item {
      .locale-arrow {
        transform: translateY(-50%) rotate(0deg);
      }
    }
  }
}

.locale-options {
  display: none;
  position:absolute;
  z-index:var(--zindex-footer-locale-option);
  width:100%;
  top:100%;
  background-color: #fff;
  button, a {
    width:100%;
    height:40px;
    line-height: 40px;
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

  .locale-label {
    color:var(--color--text);
  }
}

.footer-back-to-top {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top:1px solid #f1f1f1;
  background-color: #fff;
  button, a {
    font-size: 0.875rem;
    font-weight: 500;

    &:hover, &:focus {
      color:var(--color--highlight);
    }
  }
  .back-to-top {
    color:var(--color--text);
    padding:1.5rem 0.5rem;
    margin:0 auto;
    .icon {
      margin-left:10px;
    }
  }
}

.footer-copyright {
  font-size: 0.625rem;
  font-weight: 100;
  text-align: center;
  padding:1.5rem 0;
  border-top:1px solid #4F4D4A;
  letter-spacing: var(--root-letter-spacing);

  @include breakpoint-min($sm){
    font-size: 0.75rem;
  }

  p {
    padding:0;
    margin:0;
    text-align: center;
    + p {
      margin-top:1rem;
    }
  }
}
</style>
