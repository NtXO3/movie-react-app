import { useQuery } from "@tanstack/react-query"
import { onAuthStateChanged, User } from "firebase/auth"
import React from "react"
import { auth } from "../firebase-config"