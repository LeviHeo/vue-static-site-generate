<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.components--popup-container#popup-wrap
  .popup-container-inner
    .popup-content.type-default
      .popup-content-inner
        button.btn-popup-close
          SvgIcon.icon(
            icon-name="close"
          )
        .popup-content-detail
          .content-group#wechat-qrcode
            .content-body
              .content-wechat-qrcode
                img.qrcode(
                  src="@/assets/images/wechat_qrcode.png"
                )
                .qrcode-desc
                  SvgIcon.icon(
                    icon-name="wechat"
                  )
                  .label
                    | @leviheo
          .content-group#share-page
            .content-head
              | Share This Product
            .content-body
              .content-share-page
                ul.share-type-list
                  li
                    button.btn-share-link(
                      data-share-target="facebook"
                    )
                      .share-type-icon.facebook
                        .type-icon-inner
                          img(
                            src="@/assets/images/icon_facebook.png"
                          )
                      .share-type-label
                        | Facebook
                  li
                    button.btn-share-link(
                      data-share-target="instagram"
                    )
                      .share-type-icon.instagram
                        .type-icon-inner
                          img(
                            src="@/assets/images/icon_instagram.png"
                          )
                      .share-type-label
                        | Instagram
                  li
                    button.btn-share-link(
                      data-share-target="email"
                    )
                      .share-type-icon.email
                        .type-icon-inner
                          img(
                            src="@/assets/images/icon_email.png"
                          )
                      .share-type-label
                        | Email
                  li
                    button.btn-share-link(
                      data-share-target="weibo"
                    )
                      .share-type-icon.weibo
                        .type-icon-inner
                          img(
                            src="@/assets/images/icon_weibo.png"
                          )
                      .share-type-label
                        | Weibo
                .share-link
                  .share-link-label
                    | Click to copy link
                  .share-link-preview
                    SvgIcon.icon(
                      icon-name="link"
                    )
                    input.link-preview#share-url(
                      value=""
                    )
</template>

<style lang="scss">
@import "@/assets/css/mixin";

.components--popup-container {
  pointer-events: none;
  position: fixed;
  z-index: 0;
  top:0%;
  left:0%;
  opacity: 0;
  width:0px;
  height:0px;
  overflow: hidden;
  transform: translateX(-50%) translateY(-50%);

  transition: opacity 0.2s ease-in-out;

  .popup-container-inner {
    position: relative;
    background-color: var(--color--background);
    padding:1.5rem;
    border-radius: 5px;

    .popup-content-detail {
      min-width:180px;
      min-height:200px;
      position: relative;
      z-index: 5;

      img {
        width: auto;
        margin:0 auto;
      }

      .content-head {
        width:calc(100% - 30px);
        font-size: 0.875rem;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom:2.5rem;

        + .content-body {
          margin-top:0;
        }
      }

      .content-body {
        margin-top:2.5rem;
      }
    }
  }

  .btn-popup-close {
    position: absolute;
  }

  .content-group {
    display: none;

    &.active {
      display: block;
    }
  }

  &.active {
    opacity: 1;
    z-index: var(--zindex-popup-wrap);
    pointer-events: inherit;
    top:50%;
    left:50%;
    width:auto;
    height:auto;
    overflow:visible;
  }
}

#wechat-qrcode {
  .content-wechat-qrcode {
    padding:0 1rem;
    .qrcode {
      margin-bottom:1.5rem;
    }

    .qrcode-desc {
      display: flex;
      width:100%;
      justify-content: center;
      align-items: center;
      
      .icon {
        color:var(--color-highlight);
        margin-right:10px;
      }

      .label {
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
}

#share-page {
  .content-share-page {
    .share-type-list {
      width:430px;
      margin:0 auto;
      display: flex;
      gap:1rem;
      justify-content: space-between;

      button {
        text-align: center;
      }
    }

    .share-link {
      margin-top:20px;
      padding-top:20px;
      border-top:1px solid #ECECEC;
      width:550px;

      .share-link-label {
        font-size: 0.875rem;
        margin-bottom:10px;
      }

      .share-link-preview {
        cursor:pointer;
        background-color: #fff;
        display: flex;
        justify-content: flex-start;
        padding:1rem;
        gap: 10px;

        .icon {
          min-width:17px;
        }

        .link-preview {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width:100%;
          border:none;
          pointer-events: none;
          font-size: 1rem;

          &:focus {
            outline: none;
          }
        }
      }
    }

    .share-type-label {
      margin-top:10px;
      font-size: 0.75rem;
      color:var(--color--text);
    }

    .share-type-icon {
      width:70px;
      height:70px;
      border-radius: 50%;
      border:1px solid #EBEBEB;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        display: block;
        width:30px;
      }

      &.facebook {
        background-color: #ECEFF6;
      }

      &.instagram {
        background-color: #FEF3F3;
      }

      &.email {
        background-color: #FDF1F1;
      }

      &.weibo {
        background-color: #F0F0F0;
      }
    }
  }
}
</style>
