# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

This file is similar to the format suggested by [Keep a CHANGELOG](https://github.com/olivierlacan/keep-a-changelog).

## Unreleased
- [Feature] Add toggle/show/hide higher-order component; new utility library called recompose; convert components to stateless/dumb components.

## 28.5.1 - 2018-01-17
- [Patch] Maintenance update for Storybook

## 28.5.0 - 2018-01-10
- [Patch] - Update Input Component so that when `isReadOnly` is true, don't show a blue outline on focus. (#883)
- [Feature] - Add `colSpan` prop to Table.TH Component. (#885)

## 28.4.0 - 2018-01-05
- [Feature] - Add popper.js to Dropdown component. (#880)

## 28.3.0 - 2018-01-04
- This release was skipped.

## 28.2.3 - 2018-01-03
- [Patch] - Fix padding for last-child in css for Disclose Component
- [Patch] - Change CSS watch file for storybook config
- [Patch] - Make scrollbars--visible overflow rule !important to ensure scroll is always present. (#876)
- [Patch] - Make steps in CONTRIBUTING.md more readable
- [Patch] - Add documentation for half padding and margin override classes (#871)

## 28.2.2 - 2017-12-19
- [Patch] - Fix CSS syntax error for scrollbars--visible.

## 28.2.1 - 2017-12-15
- [Patch] - Fix for lint errors on Card component mock function.
- [Patch] - Add padding prop to Popover component to allow for hard/flush component padding and margins (#862)

## 28.2.0 - 2017-12-15
- [Feature] - Add TR props for backgroundColor (#865) and borderStyle (#866)
- [Feature] - Add .scrollbars--visible helper to show overflow container scroll bars (#863)
- [Feature] - Allow Attention React OUI component to accept other React OUI components as children (#737)

## 28.1.8 - 2017-12-01
- [Patch] - Remove old oui-icons from React bundle (#859)

## 28.1.7 - 2017-12-01
- [Patch] - npm cleaning

## 28.1.5 - 2017-11-30
- [Feature] Bump `oui-icons` to include MTV checkmark (#847)
- [Patch] - Add readme markdown file to every component (#855)

## 28.1.4 - 2017-11-30
- this release was skipped (used to test)

## 28.1.3 - 2017-11-30
- [Patch] - Fix Make it so that only last-children in the .oui-disclose_content have a padding-bottom of 20px and NOT .#{FRAMEWORK}-disclose_content
- [Patch] - Fix eslint errors where props are using functions

## 28.1.2 - 2017-11-30
- This release was skipped

## 28.1.1 - 2017-11-01
- [Patch] Add default type to button on Dropdown component (#846)

## 28.1.0 - 2017-10-31
- [Patch] Add shadow prop to Card component.
- [Patch] Update example for Select.
- [Patch] Update new components to include `oui-component` attribute for React highlighting extension.
- [Patch] Bump react-oui-icons to `1.0.2`.
- [Feature] Adds Card element to support SPA project

## 28.0.2 - 2017-10-16
- [Patch] Add dist/docs folder so we have import access to https://unpkg.com/optimizely-oui@28.0.1/docs/styles/index.js via CodePen.

## 28.0.1 - 2017-10-16
- [Patch] Upgrade react-oui-icons to v1.0.0. (#833)
- [Patch] Fix fullWidth prop bug. (#834)

## 28.0.0 - 2017-10-13
- [Release] Update to React 16 and Enzyme 3. (#830)

## 27.1.1 - 2017-10-12
- [Patch] Update empty state SVGs to point to new stroked versions in /static/x/empty-states/...
- [Patch] Ignore bundle from static dir on docs/stoybook.

## 27.1.0 - 2017-10-06
- [Feature] Add EmptyDashboard component. (#801)
- [Patch] Add more Storybook items to .npmignore.

## 27.0.1 - 2017-10-04
- [Patch] Add close dropdown behavior. (#824)
- [Patch] Add Dropdown and Link documentation for props. (#821)

## 27.0.0 - 2017-10-02
- [Release] Eliminating automatic update of react react-dom and react-addons-test-utils dependencies (breaking changes) (#819)
- [Patch] Fix-up TextField React example and storybook knob for isRequired.
- [Patch] Add icons to React Storybook.
- [Patch] Update Dropdown React example code in docs.

## 26.7.2 - 2017-09-29
- [Patch] Link to GHpages Storybook (#811)
- [Patch] Remove onBlur Dropdown prop temporarily. (#809)

## 26.7.1 - 2017-09-29
- [Patch] Move `/storybook-static` to `/docs/storybook` and remove from `.gitignore`

## 26.7.0 - 2017-09-28
- [Feature] Deploy React Storybook static version with docs. (#808)
- [Patch] Remove onBlur from Dropdown component until we sort out a better way to handle that. (#809)
- [Feature] Add Dropdown component example. (#797)

## 26.6.0 - 2017-09-26
- [Feature] Add new TextField component. (#798)
- [Feature] Add toggle function and isOpen state to Dropdown component. (#795)
- [Feature] Add Link React component (needed for EmptyDashboard component). (#799)

## 26.5.1 - 2017-09-22
- [Patch] Ignore tests for snapshots in docs.

## 26.5.0 - 2017-09-21
- [Feature] Add new Dropdown component. (#795)
- [Feature] Add new Select component.

## 26.4.7 - 2017-09-12
- [Patch] Add test for Spinner and ProgressDots components.
- [Patch] Update OUI version on storybook preview panel.

## 26.4.6 - 2017-09-09
- [Patch] Update react-oui-icons with new data-oui-component attribute.

## 26.4.5 - 2017-09-08
- [Patch] Update react-oui-icons. (#779)

## 26.4.5 - 2017-09-7
- [Patch] More changes around Optimizely repo and Glamor/icons dependencies.

## 26.4.4 - 2017-09-06
- [Patch] Exclude more items from NPM publish related to Glamor build issues in the Optimizely repo.

## 26.4.3 - 2017-09-05
- Accidental release.

## 26.4.2 - 2017-09-05
- [Patch] Update react-oui-icons. (#779)

## 26.4.1 - 2017-08-31
- [Patch] Exclude docs from NPM publish. (#777)

## 26.4.0 - 2017-08-31
- [Feature] Add Storybook to OUI docs. (#759)
- [Feature] Add react-oui-icons to OUI.
- [Feature] Add two new components, Spinner & ProgressDots.

## 26.3.0 - 2017-08-11
- [Feature] Add focus styles to buttons. (#771)
- [Feature] Add Input prop to control textAlign left/right. (#764)

## 26.2.3 - 2017-08-09
- [Patch] Revert recent Input component div wrapping changes that were breaking tests. (#767)

## 26.2.2 - 2017-08-07
- [Patch] Revert `jest` version `20.0.4` back to `18.0.0` for testing broken app builds.

## 26.2.1 - 2017-08-01
- [Patch] Update React component highlighting (#761)
- [Patch] Remove react-test-renderer dependency (#760)

## 26.2.0 - 2017-07-28
- [Feature] Add ProgressBar component. (#758)
- [Feature] Add flex-grow--none and update flex-shrink--none helpers. (#744)

## 26.1.1 - 2017-07-27
- [Feature] Add `yarn.lock` file to OUI to keep a more reliable dependency management than `npm`.
- [Patch] Upgrade `jest` framework from version `18.0.0` to `20.0.4`.

## 26.1.0 - 2017-07-25
- [Feature] Add data attribute `data-oui-component` to all outer React components for tracking. Also add URL target to display borders in the docs/app via url `#oui-showreact`. (#751)
- [Patch] Update travis.yml to kill `ssh-agent` which may be avoid background processes hanging and causing build reports only to fail. (#749)
- [Patch] Update docs to include more link examples under `text` overrides.

## 26.0.0 - 2017-07-17
- [Release] Return null when Label is empty (breaking change). (#746)

## 25.5.0 - 2017-07-17
- [Feature] Add flex helper to prevent containers from collapsing. (#744)

## 25.4.1 - 2017-07-12
- [Patch] Attempt to fix Travis `npm-run-all` failures by adding `skip_cleanup: true` flag (https://docs.travis-ci.com/user/deployment/#Uploading-Files).
- [Patch] Attempt to fix failing Travis CI deploys by removing `dist:trusty` flag.

## 25.4.0 - 2017-07-12
### Added
- [Feature] Add displayError prop to Input and Label components to better handle error states. (#738)
- [Feature] Add form-note as prop to Input component for more parity with SASS.

## 25.3.1 - 2017-07-05
### Added
- [Patch] Update PropTypes to use the new separated from react lib prop-types package.

## 25.3.0 - 2017-06-30
### Added
- [Feature] Input component accepts hasError prop to display error styles. (#738)
- [Feature] Add noBorder prop to Table.TR

### Fixed
- [Patch] Align token close button to top instead of center. (#733)

## 25.2.1 - 2017-05-19
### Added
- [Feature] Add more class options to Table and Table.TR

## 25.1.1 - 2017-04-24
### Fixed
- [Patch] Minor border-color tweaks to button underline pattern.

## 25.1.0 - 2017-04-24
### Added
- [Feature] Add `cs` language option to code component for C# syntax highlighting. (#724)

## 25.0.4 - 2017-04-05
### Changed
- [Patch] Fixed disabled input so icons are visible. (#721)

## 25.0.3 - 2017-04-05
### Changed
- [Patch] Fixed sass and docs issues with button component.

## 25.0.2 - 2017-04-04
### Changed
- [Patch] Replace `trump` with the word `overrides`. (#715)

## 25.0.1 - 2017-04-04
### Changed
- [Patch] Add trusty config option to Travis CI config to reduce `npm i` compiling failures.

## 25.0.0 - 2017-03-30
### Added
- [Release] Added a remove borders option for `BlockList`. (#691)

### Fixed
- [Patch] Remove duplicate example for `Token`.

### Changed
- [Patch] Remove CloudFront CDN upload on version release. (#706)
- [Patch] Remove `Icon` reference in `main.js` since it isn't actually working. (#684)

## 24.0.1 - 2017-02-15
### Changed
- [Patch] Simplify the CHANGELOG to make it easier to maintain.
- [Patch] Remove outdated “Philosophy” part of README to make it easier to scan through.
- [Patch] Add command to `CONTRIBUTING.md` to show how to reload the Sass and React documentation examples while developing.
- [Patch] Move Sass file for `Select` to add it to the documentation.

### Fixed
- [Patch] Create the needed directories before building documentation.
- [Patch] Simplify the steps in `CONTRIBUTING.md`.
- [Patch] Fixed the disabled state in select Sass. (#708)

## 24.0.0 - 2017-02-15
### Added
- [Patch] Add `Label` Sass examples to the documentation. (#686)
- [Patch] Add `Radio` Sass examples to the documentation. (#686)
- [Patch] Add `Checkbox` Sass examples to the documentation. (#686)
- [Patch] Add Sass documentation examples for `Textarea`. (#686)
- [Patch] Add Sass documentation examples for `Input`. (#686)

### Changed
- [Patch] Move Sass for `Textarea` to component folder. (#368)
- [Patch] Remove `text-shadow` from buttons since the shadows are inconsistent.
- [Patch] Move Sass for `Input` to component folder. (#368)
- [Patch] Change `.nvmrc` to use the latest release in Node's "Boron" release.

### Removed
- [Release] Remove Sass placeholders for `textarea` and `input`. The placeholders are `%#{$namespace}text-input`,
`%#{$namespace}textarea`, and `%oui-text-input`.

### Fixed
- [Patch] Fix issue where SVG sprite were taking up space in the documentation UI.
- [Patch] Show the correct available languages for subcomponents in the component page. (#702)

## 23.0.0 - 2017-02-03
### Changed
- [Feature] Launch updated documentation that shows both React and Sass
documentation and addresses common pain points. (#686)

### Removed
- [Release] Remove jQuery that was written for the pre-React components.
- [Release] Remove support for `oui-extras.css` that was used to generate and deploy CSS that contained out icons.

## 22.5.1 - 2017-01-30
_This version was released to fix a deployment issue in `22.5.0`._

## 22.5.0 - 2017-01-27
### Added
- [Feature] Add a `maxHeight` prop to `BlockList` to enable scrolling. (#693)

### Changed
- [Patch] Vertically align checkbox and radio with the top of the label. (#695)

### Fixed
- [Patch] Prevent checkbox and radio elements from getting squished. (#694)

## 22.4.0 - 2017-01-11
### Fixed
- [Patch] Clean up stray Tether DOM nodes on `componentWillUnmount` in `OverlayWrapper`. (#236)

## 22.3.0 - 2016-12-20
### Added
- [Feature] Add an `underline` style to `Button`.
- [Feature] Create a `BlockList` React component. (#452)
- [Patch] Update `ArrowsInline` to use prefixed placeholder so that it works in more places. (#687)

## [22.2.0][22.2.0] - 2016-12-06
### Changed
- [Patch] Load syntax highlighting synchronously but only load the necessary languages. (#679)

## 22.2.0-rc.1 - 2016-12-06
### Added
- [Feature] Bring back syntax highlighting for Code component and load asynchronously. (#678)

### Removed
- [Patch] Remove `IconSample` from documentation until icons are properly working. (#681)

## 22.1.0 - 2016-11-29
### Added
- [Feature] Added `min` and `max` props to `Input` to be used when `type` is `number`. (#676)

## 22.0.0 - 2016-11-07
_This version was accidentally released and contains no changes._

## 21.0.0 - 2016-11-07
### Removed
- [Release] Actually include the breaking change that was supposed to be in `v20.0.0`: Temporarily remove syntax highlighting from `Code` component because it may be causing problems on Optimizely.

## 20.0.0 - 2016-11-07
### Removed
- [Release] Temporarily remove syntax highlighting from `Code` component because it may be causing problems on Optimizely.

## 19.3.0 - 2016-11-04
### Added
- [Feature] Add `isDraggable`, `order`, and `description` props to `Token`. (#667)
- [Patch] Add a `Button` example that has an icon within it.

### Changed
- [Feature] `OverlayWrapper` prop `onHide` can now prevent the `overlay` from hiding by returning false. (#664)

## 19.2.0 - 2016-10-25
### Added
- [Feature] Add a `behavior` prop to `OverlayWrapper` that determines if the overlay appears on click or hover.
- [Feature] Add a `Poptip` component that uses `OverlayWrapper`. (#519)
- [Feature] Add a `shouldHideOnClick` prop to `OverlayWrapper` to prevent it from always closing when clicking outside the overlay. (#654)
- [Feature] Add `onShow` and `onHide` props to `OverlayWrapper`. (#653)
- [Feature] Add a `centerGroup` prop to `ButtonRow`. (#651)
- [Feature] Expose a `hideOverlay` function in `OverlayWrapper` as context that allows children to hide the overlay. (#657)

### Fixed
- [Patch] Fix a CSS selector that doesn't work in Enzyme. (#649)
- [Patch] Remove `fs`, an unused NPM module, from `package.json`. (#643)

## 19.1.0 - 2016-10-14
### Added
- [Feature] Create a `Radio` input React component. (#639)
- [Feature] Add a `Textarea` React component. (#638)

## 19.0.0 - 2016-10-13
### Added
- [Feature] `background--none` and `cursor--auto` trumps added. (#636)
- [Patch] Improve test coverage for `Button` React component. (#629)

### Changed
- [Release] Move React button `full` size option to its own prop for `width`. (#615)
- [Patch] Speed up local React development by using `webpack-dev-server` instead of Browsersync. This renames `npm run react-docs:serve` to `npm run react:watch`. (#495)
- [Patch] Set Codecov to only post comments in GitHub PRs when coverage changes.
- [Patch] Upgrade Jest to 16.0.0.
- [Patch] Add test coverage support in Jest and report coverage to Codecov.

### Fixed
- [Patch] Remove `style-loader` from `dependencies` since it is now only a `devDependency`.

### Removed
- [Release] Remove TimePicki library SCSS. (#627)

## 18.3.0 - 2016-10-07
### Added
- [Feature] Close the `OverlayWrapper` when clicking outside of the `overlay`. (#614)
- [Feature] Close the `OverlayWrapper` when pressing `ESC`.
- [Feature] Add a `Badge` React component. (#622)

### Changed
- [Patch] Flex-wrap React docs nav. (#623)
- [Patch] Refactor `OverlayWrapper` tests to be more unit-testy.
- [Patch] Change the default monospace font from `monospace` to use system defaults. (#617)
- [Patch] Upgrade to the latest ESLint and eslint-plugin-react. (#612)
- [Patch] Make monospace text a bit smaller. (#618)

## 18.2.1 - 2016-10-05
### Changed
- [Patch] Call `Tether.disable()` when the overlay in `OverlayWrapper` is not visible. This leads to performance increases because Tether will essentially ignore the element until it becomes enabled.
- [Patch] Reposition the Tether overlay when it is opened. This is needed because Tether can't properly calculate the position of elements that are hidden with `display: none;`.

## 18.2.0 - 2016-10-03
### Added
- [Feature] Provide option to "pin" popover to the edge of screen. (#606)
- [Feature] Add SCSS for TimePicki, a jQuery Time Picker plugin.

### Changed
- [Patch] Popover contents now scroll when the contents are larger than the viewport. (#608)

### Fixed
- [Patch] Force `npm test` to fail when the documentation can't be built. (#601)

## 18.1.0 - 2016-09-29
### Added
- [Feature] Added `checked` prop to Checkbox react component, so that it can behave as either a controlled or uncontrolled component.

## 18.0.0 - 2016-09-29
### Added
- [Feature] Create generic `OverlayWrapper` component that intelligently positions an overlay on a page relative to it's children. (#572)
- [Feature] Create simple `Popover` component. (#462)
- [Release] Import a new SCSS file for Tether, a third party library used to position popovers.

### Fixed
- [Patch] Fix "undefined" elements in React documentation JSX examples. (#602)

### Changed
- [Patch] Updated contributing documentation with detailed steps about preparing for and releasing a new OUI version. (#515)

## 17.5.1 - 2016-09-28
### Fixed
- [Patch] Revert change to absolute paths because Babel isn't configured to resolve the module paths to the correct path.

## 17.5.0 - 2016-09-28
### Added
- [Feature] Add `isOptional` prop to `Input` React component.
- [Feature] Convert `Input` to an ES2015 class to add `blur` method and allow it to be referenced with `ref`. (#591)
- [Feature] Add `Checkbox` React component.
- [Feature] Add script to run tests and watch file, `npm run jest:watch`.

### Changed
- [Patch] Update order of `npm test` tasks so that tests most likely to fail are run earlier. (#588)
- [Patch] Upgrade to the latest version of Jest, our test runner. (#585)
- [Patch] Convert relative paths to absolute paths in component imports. (#568)

### Fixed
- [Patch] Fix two small React component console errors. (#583)

## 17.4.0 - 2016-09-22
### Added
- [Feature] Add `onKeyDown` event to `Input` React component.

### Changed
- [Patch] Always load external fonts through HTTPS, not a protocol relative URL. (#581)

## 17.3.2 - 2016-09-19
### Changed
- [Patch] Remove `css-loader` dependency that was used by highlight.js and implement it the old-fashioned way. (#579)

## 17.3.1 - 2016-09-19
### Changed
- [Patch] Correct regression and mistaken size classes for icons in SCSS. (#566) and (#497)

## 17.3.0 - 2016-09-16
### Added
- [Feature] Add `isActive` prop to Button React Component

## 17.2.0 - 2016-09-16
### Added
- [Feature] Add `onFocus` event to Input React Component
- [Feature] Add `isOptional` and `isRequired` prop to Label React component to get properly colored optional/required labels. (#556)

### Changed
- [Patch] Use correct oui- prefix with label. (#555)
- [Patch] Hide the `CopyButton` component in browsers that do not support it. (#467)

## 17.1.0 - 2016-09-12
### Added
- [Feature] Add `unstyled` option for `Button`.
- [Feature] Add Python to code language prop for syntax highlighting. (#558)
- [Feature] Add disclose--right modifier option for right-aligned arrow. (#553)
- [Feature] Add `onBlur` prop to `Input`. (#559)

### Changed
- [Patch] Convert `sync-oui-icons` bash script to Node.js. (#550)
- [Patch] Use clipboard icon for copy copying in `Code` component. (#468)
- [Patch] Add a default case to each icon component so that a non-standard size can be passed.
- [Patch] Use `git push --follow-tags` when releasing a new version instead of `git push && git push --tags`. This does a push and only pushes the relevant annotated tags. (#515)
- [Patch] Remove `svgo` since it was only minifying the SVGs locally and not in the published version of OUI.
- [Patch] Loosen Code component children props and render nothing when children are empty. (#557)
- [Patch] Fixup for React icon size prop warnings with proper array syntax in script. (#560)

### Fixed
- [Patch] Improve the design of the `Token` close button.
- [Patch] Fixup for React icon size prop warnings with proper array syntax in script. (#560)
- [Patch] Update icon classes so the numerical sizes match the written sizes. (#549)

## 17.0.0 - 2016-09-07
### Changed
- [Release] Add a `tableLayoutAlgorithm` prop to the `Table` component and set it to `fixed` by default. Existing uses of the component should be updated to either ensure they look correct with the new default or add `tableLayoutAlgorithm={ 'auto' }` to the instance of `Table`. (#546)
- [Patch] Replace in-house test helpers with Airbnb's Enzyme.

## 16.0.0 - 2016-09-06
### Changed
- [Release] Remove `text-align: center` from `[colspan]`. (#544)

### Removed
- [Patch] Revert `merge=union` in `.gitattributes` because it was causing more harm than good. (#540)

## 15.2.1 - 2016-09-02
### Changed
- [Patch] Remove `padding-left: 0;` and `padding-right: 0;` from `oui-button--full` because it is never a desired style.

## 15.2.0 - 2016-09-02
### Added
- [Feature] Add `colSpan` prop to `Table.TD` component. (#533)
- [Feature] Add size class based on icon size prop. (#517)
- [Feature] Add a `density` prop to `Table` with a `loose` option. (#536)

### Fixed
- [Patch] Revert TabNav examples, the minimal examples throw errors because those props are required.
- [Patch] Updated icon default export syntax in bash script, new import syntax as well. (#506)
- [Patch] Fix warnings for keys in ButtonRow example.
- [Patch] Fix typo in `rule-no-bottom-border` SCSS for `Table`.

## 15.1.0 - 2016-08-30
### Added
- [Feature] Add a `verticalAlign` prop to `Table.TD` component.
- [Feature] Add the ability to pass a `width` to `Table.TD` and `Table.TH` components.
- [Feature] Add a `Table` style called `rule-no-bottom-border` that has borders but no bottom border on the last child.

### Changed
- [Patch] Pass `isActive` prop on `TabNav.Tab` instead of doing the logic on the child. (#522)
- [Patch] Add `user-select: none` rule to `oui-button`.
- [Patch] Make `Button` `children` prop more generic. (#507)

## 15.0.0 - 2016-08-26
### Changed
- [Release] Change the `Table` React component API to be more declarative. (#513)
- [Patch] Remove svgo-loader from inline requires for React icons and move svgo to bash script. Fixes breaking Jenkins builds and svgo issue with recent node versions. (#520)

## 14.1.0 - 2016-08-25
### Added
- [Feature] Add size class based on icon size prop. (#517)
- [Feature] Add TabNav react component
- [Feature] Add isFilter prop to <Input> for search icon (#488)

### Changed
- [Patch] Update disclose arrow to narrow style per Silvia. (#504)
- [Patch] Fix typo in React prop description to say onChange fires every keypress. (#492)
- [Patch] Fix disabled button namespace with OUI. Add all disabled examples to React docs for easy testing for now. (#511)

## 14.0.5 - 2016-08-17
### Added
- [Feature] Add isFilter prop to <Input> for search icon (#488)
- [Patch] Update require.css statement to ignore local webpack config transforms. Minor version bump from publish issues (user error). (#498)
- [Patch] Update require.css statement to ignore local webpack config transforms. Version patch bump due to publish user error. (#498)

## 14.0.0 - 2016-08-15
### Added
- [Feature] Create a shell script that programmatically generate a React component for each icon and check them into the codebase. (#475)

### Fixed
- [Patch] Add namespace to spinner Sass documentation. (#489)
- [Patch] Fix disabled state for toggle buttons (#480)
- [Patch] Update search icon (#483)
- [Patch] Add `merge=union` for `CHANGELOG.md` to reduce merge conflicts. (#493)
- [Feature] Add danger-outline button style (#491)

### Changed
- [Release] Add webpack loaders into `require(...)` (opposed to `webpack.config.js`) and as `dependencies` so that icon SVGs and `highlight.js` CSS can be loaded without requiring applications that use OUI's React components to configure the loaders in their `package.json`. (#485)

## 13.2.0 - 2016-08-03
### Added
- [Feature] Created `Token` React component.
- [Patch] Include an example of a `Table` React component with a `Button` within it.

### Fixed
- [Patch] Add expected spacing between the buttons in the React ButtonRow component. (#473)
- [Patch] Fix jarring active state for toggle buttons. (#470)

## 13.1.1 - 2016-07-22
### Fixed
- [Patch] Export the `ButtonRow` and `Table` components.

## 13.1.0 - 2016-07-22
### Added
- [Feature] Add a `tiny` sized button. (#454)
- [Patch] Add more examples to the React documentation. (#460)
- [Feature] Add optional "Copy" button to Code component. (#453)
- [Feature] Add `ButtonRow` React component, example and test. (#463)

### Fixed
- [Patch] Fix tiny README mistakes. (#451)
- [Patch] Add selector for `oui-button` in `_button-row.scss`. (#455)

### Removed
- [Patch] Remove unused root `index.js` file. (#466)

## 13.0.1 - 2016-07-13
### Added
- [Patch] Add Google Analytics to React documentation. (#448)

### Fixed
- [Patch] Add `highlight.js` to dependencies, not devDependencies. (#446)
- [Patch] Fix paths to static assets in React documentation so it doesn't assume it's hosted at the server root. (#444)

## 13.0.0 - 2016-07-13
### Added
- [Feature] Extend `Code` React component to accept a language. (#433)

### Changed
- [Patch] Create automatically generated React documentation that uses React components. (#431)

### Fixed
- [Patch] Update SCSS to add selectors for `.oui-button` where `.#{$namespace}button` is used. (#441)
- [Patch] Update outdated references to `npm run react:serve`. (#440)

## 13.0.0-rc.3 - 2016-07-05
### Added
- [Feature] Add syntax highlighting option to React `Code` component.
- [Feature] Add a new `Table` React component.

### Fixed
- [Patch] Update instructions for deploying beta versions of OUI.

## 13.0.0-rc.2 - 2016-07-01
### Added
- [Patch] Add documentation about releasing beta versions of OUI.

## 13.0.0-rc.1 - 2016-07-01
### Added
- [Release] Add React to the OUI codebase. (#378)
- [Release] Add Jest and the ESLint React plugin. (#378)
- [Release] Add automatically generated React component documentation that gets deployed when new versions are released.
- [Release] Create six React components: ArrowsInline, Attention, Button, Code, Input, and Label. (#378)
- [Feature] Begin prefixing classes that React uses with the `oui-` prefix. (#361)

### Changed
- [Patch] Update `CONTRIBUTING.md` to include information about updating Optimizely's `package.json` after a release. (#408)
- [Patch] Remove `devDependencies` before publishing OUI to NPM to increase speed of `npm install` for applications using OUI. (#356)
- [Patch] Change release process guidelines to make upgrades less painful. (#360)

### Fixed
- [Patch] Add note to `README.md` saying that ScribeSass is internal only. (#359)
- [Patch] Take a pass through our markdown files and update outdated information.

## 12.2.0 - 2016-06-24
### Added
- [Feature] Add dropup option for dropdowns. (#425)

## 12.1.0 - 2016-06-22
### Added
- [Feature] Add OUI overrides for Select2 plugin to library directory. (#421)

## 12.0.0 - 2016-06-17
### Added
- [Release] Admin color helpers as separate partial, also added better HTML examples. Renamed class, so it's a breaking change.
- [Feature] Add token styles from V2.
- [Feature] Add badge styles from V2.

## 11.5.0 - 2016-06-16
### Added
- [Feature] Add admin color from v1 and admin helper classes (#414)

## 11.4.0 - 2016-06-01
### Added
- [Feature] Restore `_search.scss` and icon to make search inputs more clear. (#400)

### Changed
- [Patch] Explicitly define the placeholder colors and add support to style CodeMirror's fake placeholders. (#405)

### Fixed
- [Patch] Update styling of jQuery datepicker in `_datepicker.scss`.
- [Patch] Tighten Dropdown line-height to work better for 3-line descriptions. (#403)

## 11.3.1 - 2016-05-12
### Fixed
- [Patch] Change text-shadow offset of highlight buttons to match danger button. (#398)

## 11.3.0 - 2016-04-19
### Added
- [Feature] Added `--small` variation of `progress-dots`

## 11.2.0 - 2016-04-18
### Added
- [Feature] Add draft and live background color helpers (#376)

### Removed
- [Patch] Remove linter pre-commit hook to avoid annoying Ruby dependency. (#370)

## 11.1.0 - 2016-04-12
### Changed
- [Patch] Restyle button focus to be more consistent with other inputs. (#355)
- [Patch] Fix color of button focus to actually be consistent.
- [Feature] Updated popover content to have smaller body font size and specifications for a footer. Changed size of ($line-height, tight) variable.

## 11.0.0 - 2016-04-11
### Added
- [Feature] Add `.dropdown--descriptive` class to support dropdown with sentences of text inside. (#352)
- [Feature] Adding new style of loader, called `progress-dots`. (#347)
- [Feature] Add ESLint to repository and updated JavaScript to follow the rules. (#357)
- [Feature] Added `.flex--dead-center` to center an element vertically and horizontally. (#342)

### Changed
- [Patch] Dropdown items no longer have `whitespace: nowrap` applied. Text will wrap freely and the width, unless defined elsewhere, will be the width of the element that opens the dropdown. (#352)
- [Release] Renamed `progress.scss` to `progress-bar.scss`.
- [Patch] Change "Progress" to "Progress Bar" in documentation.
- [Patch] Change hex value for variable `brand-dark` to match one of the Optimizely brand colors. (#349)
- [Patch] Revert part of a commit to `.button-group` that introduced a bug in v10.0.0. (#137)
- [Patch] Replace `gulp lint` task with NPM scripts. (#321)
- [Patch] Change default scss-lint severity so warnings are thrown as errors and break the build. (#351)
- [Patch] Update to latest scss-lint.
- [Patch] Add a `.ruby-version` file for rbenv to use.

### Fixed
- [Patch] Fix issue where tabs border was not appearing ebcause of CSS issues. (#343, #345)

## 10.0.0 - 2016-03-29
### Added
- [Feature] Autoprefixer, removing all mixins that previously provided prefixes. (#240)
- [Feature] Adding new white-space trump. (#223)
- [Feature] Adding `icon-target` to provide a hover state for standalone, clickable icons.
- [Patch] Adding namespace option in oui javascript. (#255)
- [Patch] Add more ScribeSass comments.
- [Feature] Adding `vertical-align: text-top` to help with inline icon alignment. (#299)
- [Patch] Adding `line-height` and `font-weight` to dropdowns so they retain styling when nested. (#292)
- [Patch] Added more clarity around `oui-extras.css` in README. (#232)
- [Patch] Added reference and link to documenation. (#231)
- [Patch] Added `.overflow-y--scroll` trump.

### Changed
- [Release] Using simplified `map-fetch` function and now requires commas after each argument. (#239)
- [Release] Combined different border variables (border color and border-radius) into one object, `$border`, so it can amended downstream. References to `$border-radius` will need to change in apps using OUI. (#156)
- [Patch] Change recommended hotfix procedure to advise branching off of `master` and merging into `master` instead of branching off of `devel`, merging into `devel`, then cherry-picking commits. (#308)
- [Patch] Change README remote CSS examples to use HTTPS. (#293)
- [Release] Change `.wrap` to `.wrap-text` due to class name conflict. (#301)
- [Feature] Moving values for `_icons.scss` into the variables file.
- [Feature] Added `icon--medium` class for 24x24 sized icons.
- [Patch] Move comment about `space-around` that is in the wrong needed. (#180)
- [Patch] Change `CONTRIBUTING.md` to add information about creating GitHub issues to track deprecated code. (#149)
- [Patch] Removing old code from `reset.css`. (#288)
- [Patch] Removing old code from `reset.css`. (#226)
- [Patch] Update README links for documentation and OUI CDN. (#334)
- [Patch] Declaring `hover` state on default buttons so anchors styled as buttons would render identically to buttons. (#303)
- [Release] Removing `_edit-text.scss`. Was not being used. (#275)
- [Release] Removing `box-sizing` from input `type="search"`. Was not needed. (#275)
- [Patch] Move `dependencies` to `devDependencies` in the `package.json`. (#225)
- [Release] Move functions, mixins, and Sass-y things to a `partials/sass/` directory. This change requires updating the main SCSS file that imports the OUI partials and variables. (#259)
- [Release] Rename `_rules.scss` to `_horizontal-rules.scss`. (#271)
- [Release] Move `_array.scss`, `_button-group.scss`, `_button-row.scss`, `_clearfix.scss`, `_flexbox.scss`, `_grid.scss`, `island.scss`, and `_matrix.scss` into a `layout/` directory. (#258)
- [Release] Rename `base/` to `elements/` and move `_buttons.scss` and `_horizontal-rules.scss` into it. (#268)
- [Release] Merge components and objects directory. (#336)
- [Patch] Clean up `package.json`.
- [Patch] Move the `.no-border` classes from layout trumps to border trumps. (#228)

### Fixed
- [Patch] Adding max-height and overflow to dropdowns. (#235).
- [Patch] Using `display:none` on dropdowns so they don't take up any space when on page. (#236).
- [Patch] Decreasing left/right padding on `select` elements so they better align with other form elements. Previously the inherited padding of buttons. (#220).
- [Patch] Adding variable for input padding. (#220).
- [Patch] Add namespace to comments in `_tabs.scss`. (#310)
- [Patch] Add namespace to dropdown code samples that were missing them. (#295).
- [Patch] Make small SCSS comment tweaks to make OUI work in ScribeSass. (#335)
- [Patch] Add step at end of CONTRIBUTING to include merging `master` back into `devel`. (#273)
- [Patch] Adding CSS for nested buttons (like in dropdows) in `button-group` so rounded corners work as expected (#137).
- [Patch] Fix some outdated comments.
- [Patch] Re-add missing variable `pkg` in `deploy.js`. (#210)
- [Patch] Add prefix to code examples for `_code.scss`. (#286)
- [Patch] Fix deploy gulpfile to include merging `master` back into `devel`. (#209)
- [Patch] Remove comment that didn't have any content. (#257)
- [Patch] Fix typo in license.
- [Patch] Remove references to `lego-` in README. (#245)
- [Patch] Fix incorrect width in width--75 sizing class (#244)
- [Patch] Removed extraneous comment (#234)
- [Patch] Tiny documentation fixes. (#234)
- [Patch] Add other input types to input reset. (#261)
- [Patch] Rename an incorrect width class referenced within a comment. (#256)

## Removed
- [Release] Remove unused retina sprites file. (#264)
- [Release] Removing `_search.scss`, not providing much value. HTML change removing extraneous HTML is not required but encouraged. (#290)
- [Patch] Removed `editiable.js` files as they were conflicting with the Ace editor. (#252)
- [Release] Removed `appearance` and `keyframes` mixins since we now use Autoprefixer. (#282)
- [Patch] Removed `--deprecated.scss` files and import references to them. (#229)
- [Release] Remove `.#{$namespace}form--small` (#162)

## 9.0.8 - 2016-03-23
### Changed
- [Patch] Add email address to NPM Travis CI config.

## 9.0.7 - 2016-03-23
### Changed
- [Patch] Force a version of NPM and tweak version detection so that the Travis CI NPM publishing works. (#328)

## 9.0.6 - 2016-03-23
### Changed
- [Patch] Use Travis CI to publish the NPM package. (#328)

## 9.0.5 - 2016-03-23
### Changed
- [Patch] Set ACL on Travis CI uploads so that the files are publicly viewable. (#326)

## 9.0.4 - 2016-03-23
### Changed
- [Patch] Update pre-commit hook to run `npm test` instead of `gulp lint`. (#324)

## 9.0.3 - 2016-03-23
### Changed
- [Patch] Offload deployment tasks to Travis CI and change the commands used to deploy. (#319, #320)

## 9.0.2 - 2016-03-14
### Added
- [Patch] Add OUI icons preview URL to icons SCSS comments. (#287)
- [Patch] Use `oui-icons` NPM package instead of the GitHub URL. (#277)

## 9.0.1 - 2016-02-19
### Fixed
- [Patch] Change `oui-icons` reference in `package.json` to support older versions of NPM. (#222)

## 9.0.0 - 2016-01-19
### Added
- [Feature] Moving gulp tasks into individual files. Adding documenation for each one. (#202)
- [Feature] Add a link to the living OUI documentation in the README. (#177)
- [Feature] Add Travis CI and Gitter badges to README. (#198)

### Changed
- [Release] Moved polyfills from separate folder/partials into the existing `elements/mixins` and `elements/functions` partials. This requires removing polyfill references from apps using OUI. (#185)
- [Feature] Replace existing comments with ScribeSass annotations. (#194)
- [Release] Renaming all instances of `core` to `oui`. This requires changing `core` Sass references in the apps that use OUI. (#183, #184)
- [Patch] Add `<link>` tags to the external OUI examples in the README.
- [Patch] Update `devel` with `master` after deploy using Gulp. (#193)
- [Patch] Updating javascript to remove handlers when not needed in dropdown/popover.
- [Patch] Updating javascript to remove `jQuery.noconflict` as it breaks other jQuery code.

### Fixed
- [Patch] Fix the gulp `.src()` for the AWS S3 deploy. (#192)
- [Patch] Removed outdated information from `CONTRIBUTING.md`. (#193)
- [Patch] Remove comment about `space-around` that isn't needed. (#180)

## 8.0.0 - 2016-01-13
### Added
- [Feature] Adding `.icon--text-align` class to allow inline icons to visually align with the text. E.g., help icons.
- [Feature] Adding an image of our mascot, Louis.

### Changed
- [Patch] Renamed `oui-canvas.css` to `oui.css` and added a `oui-extras.css` file that contains the only the icons that were previously concatenated into `oui-canvas.css`. May contain additional "extras" in the future. (#176, #186)
- [Patch] Push both `oui.css` and `oui-extras.css` to AWS on releases.
- [Patch] Simplifying CSS in `_select.scss` to remove IE hacks.
- [Release] Removed IE10+ mixin in `partials/elements/_mixins.scss` to remove IE hacks. Not being used within OUI.
- [Patch] Update `CONTRIBUTING.md` to include info on hotfixes. (#168)

### Fixed
- [Patch] Removing `config.rb`. (#163)
- [Patch] Remove executable bit from non-executable files. (#161)
- [Patch] Remove some outdated information from `README.md`. (#174)

## 7.1.0 - 2015-12-08
### Changed
- [Feature] Add ability to generate CSS with icons for Canvas and simplify deployment steps.

## 7.0.0 - 2015-12-04
### Added
- [Release] Adding local JS to power components.
- [Feature] Adding new, custom styling for `select` elements. Removed select styling from `_forms.scss`.
- [Feature] Adding mixin to target IE10+.
- [Feature] Adding mixin to disable `appearance` to remove default browser styling from some elements.
- [Release] Adding additional HTML examples to test component javascript.
- [Feature] Adding input variation `_input-icon.scss` so icons can be added to inputs, like a calendar icon for a date picker.
- [Patch] Adding `edit-text` Sass file.
- [Patch] Adding `background--current-color` trump to make the background the current color.

### Changed
- [Patch] Removed `src/img` and `src/wireframe`. SVGs now in `oui-icons`. `wireframe` not being used or maintained.
- [Patch] Removing `box-sizing: content-box` to restore inherited `border-box` value so that height/width sizing is consistent with inputs/selects. Buttons previously did not have a border so it was easier to calculate height based on `content-box`.
- [Patch] Adding line-height variables for buttons to better center text vertically.
- [Release] Changing `accordion.scss` css to be more consistent with javascript conventions.
- [Release] Changing `disclose.scss` css to be more consistent with javascript conventions.
- [Release] Changing `dropdown.scss` css to be more consistent with javascript conventions.
- [Release] Changing `tabs.scss` css to be more consistent with javascript conventions.
- [Release] Changing `popover` to `pop--over` to more consistent with BEM conventions.
- [Release] Changing `poptip` to `pop--tip` to more consistent with BEM conventions.
- [Patch] Changing the default variable poptip width.
- [Patch] Removing right padding from `input-search`. (#158)
- [Feature] Add a license to the repository. (#125)
- [Feature] Adding scrolling variation for tables.

### Fixed
- [Patch] Fix incorrect links in the changelog.

## 6.0.0 - 2015-10-07
### Changed
- [Patch] Updating weight of poptips from not specified to `600`.
- [Patch] Border-radius on buttons now all `2px`.
- [Patch] Adding `narrow` and `tight` button variations so left/right padding can be made smaller.
- [Feature] `matrix` mixin now has 3 optional values to specify number of columns, spacing, and an optional pixel value for responsive, e.g. `matrix(3, 300px)`.
- [Patch] Adding `gulp html-tests` task to test changes to core using live HTML examples.
- [Patch] Adding explanation of `html-tests` into README.md.
- [Patch] Adding fix for Firefox buttons in `_reset.scss`, removing inner padding and border.
- [Release] Rename LEGO to OUI. This creates a new NPM registry and changes the GitHub repository URL. (#130)

## 5.0.0 - 2015-09-28
### Added
- [Patch] Adding `watch` process so that Sass changes will compile automatically. To use run `gulp watch`.

### Deprecated
- [Patch] Adding `_buttons--deprecated.scss` to temporarily retain the `button--dismiss` styling.

## Changed
- [Patch] Removed unneeded `!important` on colors by using `:visited` to fix conflicts with anchors styled as buttons.
- [Release] Updating buttons to use new styling, `button--dismiss` is now `button--plain`.
- [Patch] Removing `button--extra`. It is not used in the app and is not needed.

## 4.0.1 - 2015-09-22
### Fixed
- [Patch] Added back a reference to the `_borders.scss` file. (#127)
- [Patch] Fixes bug in previous release that caused the height of `lego-select` to be too large in FF/IE.

### Deprecated
- [Patch] Adding `_layout--deprecated.scss` to temporarily retain the `lego-pane...` classes (#70)
- [Patch] Adding `_sizing--deprecated.scss` to temporarily retain the `width/height-` trumps. (#69)
- [Patch] Adding `_flexbox--deprecated.scss` to temporarily retain the `flex-` classes.
- [Patch] Adding instructions in CONTRIBUTING.md about how to handle deprecated code.

## 4.0.0 - 2015-09-14
### Added
- [Patch] `em` italic
- [Release] Rebuilding flexbox mixins/classes, removing `lego-pane...` classes. (#70)
- [Release] Provide an optional namespacing variable. (#68)
- [Feature] Added two layout mixins/classes for centering. (#116)
- [Release] Make add/remove table row more robust, fix bugs. (#119)
- [Patch] Added `height--1-1` trump class to allow for `height: 100%`.
- [Patch] Adding class to make input/textarea disabled appearance the same when using classes or disabled attr. (#117)

### Changed
- [Release] Removed `.input--disabled` in favor of extending both `.text-input` & `.textarea` with `--disabled`. (#117)
- [Release] Rename `.informative` to `.cursor--help`. (#73)

### Fixed
- [Patch] Removing `outline: none` from buttons. (#89)
- [Patch] Clarify the "Releasing a new version of LEGO" steps. (#111)
- [Patch] Clarify `CONTRIBUTING.md` to suggest only pushing the newly created tag. (#107)
- [Patch] Fixes alignment of `lego-icon` inside `lego-button`.
- [Patch] Fixes height of `lego-select` by adding `box-sizing: content-box;` so height will be calculated the same as `lego-button`.

## 3.1.0 - 2015-09-02
### Added
- [Feature] Add explanations to Patch, Feature, and Release in `CONTRIBUTING.md`. (#110)

### Changed
- [Patch] `.lego-button--highlight` changed from green to bue

## 3.0.0 - 2015-09-01
### Added
- [Patch] Add "Charcoal" color `#383838`.
- [Patch] Checks to see if `$include-fonts` map exists. Allows usage of Lego without being forced to include brand font. (#90)
- [Feature] Adding namespace variable so we can use 'lego-' or 'oui-' or no prefix. (#68)
- [Feature] Removing `lego-` from mixins that used it: grid, matrix, media. Use of this mixin will have to be updated.

### Removed
- [Release] Remove `.lego-tag` from Core. (#72)

### Changed
- [Patch] Bump font weight for `.weight--bold` class to `600` so its the same as a `<b>` tag.
- [Patch] Updated font styles for `.lego-table th`
- [Patch] Migrate from Travis CI legacy to container-based infrastructure.

### Fixed
- [Patch] Change the weight of `<b>` and `<strong>` tags to `600`.

## 2.0.0 - 2015-08-18
### Changed
- [Release] Major refactor of button styles and class names. New available class names are `.lego-button--highlight`, `lego-button--outline`, `.lego-button--outline-reverse`, `.lego-button--extra`, `.lego-button--dismiss`. `.lego-button--brand` has been deprecated. Usage for classes to follow shortly. (#92) (#85) (#74)
- [Release] Added `!important` to buttons so that when used as anchors the color is consistent.

## 1.0.0 - 2015-08-18
### Fixed
- [Patch] Change comments in `_spinner.scss` to refer to `.lego-overlay` since `.lego-spinner-wrap` doesn't exist. (#76)
### Added
- [Release] Add namespacing variable to Core (#68).

### Changed
- [Patch] Removed concatenation from the `@font-face` URL strings because it was breaking the SCSS parser used for documentation generation.
- [Release] Renaming sizing trumps to be BEM consistent. (#69)

### Removed
- [Patch] Remove old gitignore targets from js days. (#97)

## 0.0.3 - 2015-08-05
### Added
- [Patch] Add a `.lego-pane--scroll-x` for setting `overflow-x` to `auto`.
- [Patch] Add a `.pointer-events--none` trump for disabling pointer events.
- [Patch] Add a `.cursor--move` trump for changing the cursor to `move`.
- [Patch] Allow `.lego-overlay` to be extended with `%lego-overlay`.

## Changed
- [Patch] Moved `_borders.scss` from `components` to `trumps` and added `!important`.

### Fixed
- [Patch] Fix the name of the npm module and changed the privacy setting to false.

## 0.0.2 - 2015-07-13
### Fixed
- [Patch] Fix the broken links in `CHANGELOG.md`. (#60)

### Changed
- [Patch] `.lego-popover` was dependant on `.lego-block-list-group` for styling its `border`, `border-radius`, and `padding` of child elements, however this added other undesired styles to `.lego-popover`. This change removes the link between `.lego-popover` and `.lego-block-list-group`.

### Added
- [Patch] Add Travis CI support to the LEGO repository.
- [Patch] Update `CONTRIBUTING.md` to include information on Git tags
- [Patch] Updated README.md to include example code and usage instructions.
- [Patch] Added `src/scss/core.scss` file so that Core could be compiled.
- [Patch] Added `sass` task to gulpfile.js to compile Core.
- [Patch] Added `npm start` script into `package.json` to run tests.
- [Patch] Added `npm start` script into `package.json` to run install processes.

### Removed
- [Patch] Removed unneeded gems from Gemfile.

## 0.0.1 - 2015-06-24
### Added
- [Patch] Use semantic versioning in LEGO (#58).
