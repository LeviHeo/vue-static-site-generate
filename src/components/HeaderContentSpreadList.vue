<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.group-content-detail-spread-list
  .spread-list-group
    a(
      href="/"
    )
      img(
        src="https://picsum.photos/396/264"
      )
  .spread-list-group
    .group-sub-title.
      About Us
    .spread-list-content
      ul
        li
          a(
            href="/"
          )
            | Brand Heritage
        li
          a(
            href="/"
          )
            | Chairperson's Profile
        li
          a(
            href="/"
          )
            | Event Highlights
        li
          a(
            href="/"
          )
            | Press Release
  .spread-list-group
    .group-sub-title.
      Corporate Governance
    .spread-list-content
      ul
        li
          a(
            href="/"
          )
            | Audit Committee
        li
          a(
            href="/"
          )
            | Remuneration Committee
        li
          a(
            href="/"
          )
            | Nomination Committee
        li
          a(
            href="/"
          )
            | Corporate Governance Committee
        li
          a(
            href="/"
          )
            | Internal Control
  .spread-list-group
    .group-sub-title.
      Investor Relations
    .spread-list-content
      ul
        li
          a(
            href="/"
          )
            | Corporate Information
        li
          a(
            href="/"
          )
            | Announcements
        li
          a(
            href="/"
          )
            | Circulars
        li
          a(
            href="/"
          )
            | Corporate Presentation
        li
          a(
            href="/"
          )
            | Investor Information
        li
          a(
            href="/"
          )
            | Shareholder Corner
        li
          a(
            href="/"
          )
            | Investor Inquiries
        li
          a(
            href="/"
          )
            | Notice on Replacement of Lost Share Certificates
</template>

<style lang="scss">
.group-content-detail-spread-list {
  display: flex;
  // justify-content: space-between;
  gap:3rem;

  .spread-list-content {
    margin-top:1.2rem;
    a, button {
      display: block;
      color:var(--color--brown-3);
      max-width:220px;

      &:hover, &:focus {
        color:var(--color--highlight);
      }
    }
    ul {
      display: block;
      li {
        + li {
          margin-top:1rem;
        }
      }
    }
  }
}
</style>
