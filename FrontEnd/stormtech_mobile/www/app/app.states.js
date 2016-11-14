angular.module('stormtech')
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'app/shared/navbar/tabs.html'
      })
      .state('tab.books', {
        url: '/books',
        views: {
          'tab-books': {
            templateUrl: 'app/components/books/books.html',
            controller: 'BooksController'
          }
        }
      })
      .state('tab.details', {
        url: '/details',
        params: {
          bookId: null
        },
        views: {
          'tab-books': {
            templateUrl: 'app/components/books/detail/detailsBook.html',
            controller: 'DetailsBookController'
          }
        }
      })
      .state('tab.create', {
        url: '/create',
        views: {
          'tab-create': {
            templateUrl: 'app/components/books/create/createBook.html',
            controller: 'CreateBookController'
          }
        }
      })
      .state('tab.sorted', {
        url: '/sorted',
        views: {
          'tab-sorted': {
            templateUrl: 'app/components/books/sorted/sortedBooks.html',
            controller: 'SortedBooksController'
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/books');
  });
