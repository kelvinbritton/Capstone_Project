package com.libraryroom.table;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.tools.javac.util.List;

import javax.servlet.annotation.WebInitParam;
import java.util.Date;

@WebServlet(description = "My First Servlet", urlPatterns = { "/LibraryRoomTable" ,
"/LibraryRoomTable.do"}, initParams = {@WebInitParam(name="id",value="1"),@WebInitParam(name="name",value="pankaj")})

public class LibraryRoomTable extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public LibraryRoomTable() {
        super();
        // TODO Auto-generated constructor stub
    }
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String errorString = null;
		List<Product>list = null;
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
